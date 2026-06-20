const AVAILABILITY_RANK = {
  in_stock: 4,
  low_stock: 3,
  unknown: 2,
  out_of_stock: 0
};

const MATCH_RANK = {
  exact: 4,
  acceptable: 3,
  conditional: 2,
  poor: 0
};

function numberOrNull(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function scoreCandidate(candidate) {
  const matchScore = MATCH_RANK[candidate.matchQuality] ?? 0;
  const availabilityScore = AVAILABILITY_RANK[candidate.availability] ?? 0;
  const pickupBonus = candidate.pickupAvailable ? 1 : 0;
  const deliveryBonus = candidate.deliveryAvailable ? 0.5 : 0;
  const warningPenalty = (candidate.warnings || []).length * 0.5;

  return matchScore * 4 + availabilityScore * 2 + pickupBonus + deliveryBonus - warningPenalty;
}

function normalizeCandidate(candidate) {
  const price = numberOrNull(candidate.price);

  return {
    availability: 'unknown',
    matchQuality: 'poor',
    pickupAvailable: false,
    deliveryAvailable: false,
    warnings: [],
    ...candidate,
    price,
    score: scoreCandidate(candidate)
  };
}

function matchesMaterial(material, candidate) {
  if (candidate.materialId) {
    return candidate.materialId === material.id;
  }

  const haystack = [candidate.name, candidate.query, candidate.category]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return material.name
    .toLowerCase()
    .split(/\s+/)
    .filter((part) => part.length > 2)
    .some((part) => haystack.includes(part));
}

function rankCandidatesForMaterial(material, candidates) {
  return candidates
    .map(normalizeCandidate)
    .filter((candidate) => matchesMaterial(material, candidate))
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      if (a.price === null) {
        return 1;
      }

      if (b.price === null) {
        return -1;
      }

      return a.price - b.price;
    });
}

function bestCandidateForMaterial(material, candidates) {
  const ranked = rankCandidatesForMaterial(material, candidates);
  return ranked[0] || null;
}

function candidateLineTotal(material, candidate) {
  if (!candidate || candidate.price === null) {
    return null;
  }

  return material.quantity * candidate.price;
}

function groupByStore(materials, candidates) {
  const stores = new Map();

  for (const material of materials) {
    for (const candidate of rankCandidatesForMaterial(material, candidates)) {
      if (!stores.has(candidate.retailer)) {
        stores.set(candidate.retailer, []);
      }

      stores.get(candidate.retailer).push({ material, candidate });
    }
  }

  return stores;
}

function buildOneStopOption(plan, candidates) {
  const stores = groupByStore(plan.materials, candidates);
  let best = null;

  for (const [store, rows] of stores.entries()) {
    const bestRows = [];

    for (const material of plan.materials) {
      const matches = rows
        .filter((row) => row.material.id === material.id)
        .sort((a, b) => b.candidate.score - a.candidate.score);

      if (matches[0]) {
        bestRows.push(matches[0]);
      }
    }

    if (bestRows.length === 0) {
      continue;
    }

    const stockedRequired = bestRows.filter(
      (row) => row.material.required && row.candidate.availability !== 'out_of_stock'
    ).length;
    const total = bestRows.reduce((sum, row) => {
      const lineTotal = candidateLineTotal(row.material, row.candidate);
      return lineTotal === null ? sum : sum + lineTotal;
    }, 0);
    const score = stockedRequired * 10 + bestRows.length * 3 - total / 100;

    if (!best || score > best.score) {
      best = {
        mode: 'one-stop',
        store,
        score,
        estimatedTotal: Number(total.toFixed(2)),
        coverage: bestRows.length,
        missingRequired: plan.materials.filter(
          (material) => material.required
            && !bestRows.some((row) => row.material.id === material.id)
        ),
        lines: bestRows
      };
    }
  }

  return best;
}

function buildCheapestOption(plan, candidates) {
  const lines = [];

  for (const material of plan.materials) {
    const cheapest = rankCandidatesForMaterial(material, candidates)
      .filter((candidate) => candidate.availability !== 'out_of_stock')
      .sort((a, b) => {
        if (a.price === null) {
          return 1;
        }

        if (b.price === null) {
          return -1;
        }

        return a.price - b.price;
      })[0];

    if (cheapest) {
      lines.push({ material, candidate: cheapest });
    }
  }

  const estimatedTotal = lines.reduce((sum, row) => {
    const lineTotal = candidateLineTotal(row.material, row.candidate);
    return lineTotal === null ? sum : sum + lineTotal;
  }, 0);
  const stores = [...new Set(lines.map((row) => row.candidate.retailer))];

  return {
    mode: 'cheapest',
    stores,
    score: lines.length * 5 - stores.length,
    estimatedTotal: Number(estimatedTotal.toFixed(2)),
    coverage: lines.length,
    missingRequired: plan.materials.filter(
      (material) => material.required && !lines.some((row) => row.material.id === material.id)
    ),
    lines
  };
}

function buildAvailableTodayOption(plan, candidates) {
  const lines = [];

  for (const material of plan.materials) {
    const available = rankCandidatesForMaterial(material, candidates).find(
      (candidate) => candidate.availability === 'in_stock' && candidate.pickupAvailable
    );

    if (available) {
      lines.push({ material, candidate: available });
    }
  }

  return {
    mode: 'available-today',
    stores: [...new Set(lines.map((row) => row.candidate.retailer))],
    score: lines.length * 8,
    coverage: lines.length,
    missingRequired: plan.materials.filter(
      (material) => material.required && !lines.some((row) => row.material.id === material.id)
    ),
    lines
  };
}

export function rankMaterialCandidates(material, candidates) {
  return rankCandidatesForMaterial(material, candidates);
}

export function buildShoppingOptions(plan, candidates) {
  const normalizedCandidates = candidates.map(normalizeCandidate);
  const options = [
    buildOneStopOption(plan, normalizedCandidates),
    buildCheapestOption(plan, normalizedCandidates),
    buildAvailableTodayOption(plan, normalizedCandidates)
  ].filter(Boolean);

  return options.sort((a, b) => {
    if (b.coverage !== a.coverage) {
      return b.coverage - a.coverage;
    }

    return b.score - a.score;
  });
}

export function attachShoppingOptions(plan, candidates) {
  return {
    ...plan,
    shoppingOptions: buildShoppingOptions(plan, candidates),
    materialMatches: plan.materials.map((material) => ({
      materialId: material.id,
      candidates: rankCandidatesForMaterial(material, candidates)
    }))
  };
}

export function summarizeMissingRequired(option) {
  return option.missingRequired.map((material) => ({
    id: material.id,
    name: material.name,
    quantity: material.quantity,
    unit: material.unit
  }));
}
