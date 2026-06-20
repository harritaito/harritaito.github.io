import { createDiyProjectPlan } from '../diy-planner';
import {
  attachShoppingOptions,
  buildShoppingOptions,
  rankMaterialCandidates,
  summarizeMissingRequired
} from '../diy-planner/shoppingOptimizer';

const raisedBedPlan = createDiyProjectPlan({
  projectId: 'raised-garden-bed',
  preferredStores: ['Ace', 'Home Depot'],
  ownedTools: ['drill-driver'],
  dimensions: {
    lengthInches: 96,
    widthInches: 48,
    heightInches: 18
  }
});

const candidates = [
  {
    materialId: 'garden-bed-boards',
    retailer: 'Ace',
    name: 'Cedar board 2x6x8',
    price: 13.5,
    availability: 'in_stock',
    matchQuality: 'exact',
    pickupAvailable: true
  },
  {
    materialId: 'garden-bed-boards',
    retailer: 'Home Depot',
    name: 'Budget board 2x6x8',
    price: 8.25,
    availability: 'low_stock',
    matchQuality: 'acceptable',
    pickupAvailable: true
  },
  {
    materialId: 'exterior-screws',
    retailer: 'Ace',
    name: 'Exterior screws 3 in 1 lb',
    price: 11.99,
    availability: 'in_stock',
    matchQuality: 'exact',
    pickupAvailable: true
  },
  {
    materialId: 'soil-mix',
    retailer: 'Ace',
    name: 'Raised bed soil mix 1 cu ft',
    price: 6.5,
    availability: 'in_stock',
    matchQuality: 'exact',
    pickupAvailable: true
  },
  {
    materialId: 'work-gloves',
    retailer: 'Home Depot',
    name: 'Work gloves',
    price: 4.99,
    availability: 'in_stock',
    matchQuality: 'exact',
    pickupAvailable: true
  },
  {
    materialId: 'corner-posts',
    retailer: 'Home Depot',
    name: 'Exterior post 4x4',
    price: 10,
    availability: 'out_of_stock',
    matchQuality: 'exact',
    pickupAvailable: false
  }
];

describe('DIY shopping optimizer', () => {
  test('ranks exact in-stock pickup candidates above cheaper weaker matches', () => {
    const boards = raisedBedPlan.materials.find((material) => material.id === 'garden-bed-boards');
    const ranked = rankMaterialCandidates(boards, candidates);

    expect(ranked[0]).toEqual(expect.objectContaining({ retailer: 'Ace' }));
    expect(ranked[1]).toEqual(expect.objectContaining({ retailer: 'Home Depot' }));
  });

  test('builds shopping modes that preserve coverage and missing required items', () => {
    const options = buildShoppingOptions(raisedBedPlan, candidates);
    const cheapest = options.find((option) => option.mode === 'cheapest');
    const availableToday = options.find((option) => option.mode === 'available-today');

    expect(options).toEqual(expect.arrayContaining([
      expect.objectContaining({ mode: 'one-stop' }),
      expect.objectContaining({ mode: 'cheapest' }),
      expect.objectContaining({ mode: 'available-today' })
    ]));
    expect(cheapest.stores).toEqual(expect.arrayContaining(['Ace', 'Home Depot']));
    expect(availableToday.lines.every((line) => line.candidate.pickupAvailable)).toBe(true);
    expect(summarizeMissingRequired(cheapest)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 'corner-posts' })
      ])
    );
  });

  test('attaches reusable shopping options and ranked material matches to a plan', () => {
    const enriched = attachShoppingOptions(raisedBedPlan, candidates);

    expect(enriched.shoppingOptions.length).toBeGreaterThan(0);
    expect(enriched.materialMatches).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          materialId: 'garden-bed-boards',
          candidates: expect.arrayContaining([
            expect.objectContaining({ retailer: 'Ace' })
          ])
        })
      ])
    );
  });
});
