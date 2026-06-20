import { getProjectTemplate, QUALITY_TIERS } from './templates';

const DEFAULT_LOCATION = {
  country: 'US',
  postalCode: null
};

function roundUp(value) {
  return Math.ceil(Number(value) || 0);
}

function positiveNumber(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : fallback;
}

function mergeDimensions(template, dimensions = {}) {
  return {
    ...template.defaultDimensions,
    ...dimensions
  };
}

function makeShoppingSearch({ itemName, specs = [], stores = [] }) {
  const query = [itemName, ...specs].filter(Boolean).join(' ');

  return {
    query,
    stores: stores.map((store) => ({
      store,
      query
    }))
  };
}

function materialItem({
  id,
  name,
  quantity,
  unit,
  category = 'material',
  required = true,
  confidence = 'medium',
  rationale,
  specs = [],
  avoid = [],
  substitutions = [],
  stores = []
}) {
  return {
    id,
    name,
    category,
    quantity,
    unit,
    required,
    confidence,
    rationale,
    specs,
    avoid,
    substitutions,
    shoppingSearch: makeShoppingSearch({ itemName: name, specs, stores })
  };
}

function toolItem({
  id,
  name,
  requiredness = 'required',
  decision = 'buy_or_borrow',
  beginnerSafety = 'easy',
  rationale,
  alternatives = []
}) {
  return {
    id,
    name,
    requiredness,
    buyRentBorrow: decision,
    beginnerSafety,
    rationale,
    alternatives
  };
}

function buildRaisedGardenBedPlan({ dimensions, qualityTier, ownedTools, stores }) {
  const lengthInches = positiveNumber(dimensions.lengthInches, 96);
  const widthInches = positiveNumber(dimensions.widthInches, 48);
  const heightInches = positiveNumber(dimensions.heightInches, 18);
  const perimeterFeet = (2 * (lengthInches + widthInches)) / 12;
  const boardCourses = roundUp(heightInches / 6);
  const eightFootBoards = roundUp((perimeterFeet * boardCourses) / 8);
  const soilCubicFeet = roundUp((lengthInches * widthInches * heightInches) / 1728);
  const screwPounds = Math.max(1, roundUp(eightFootBoards / 8));
  const lumberSpec = qualityTier === QUALITY_TIERS.durable ? 'cedar' : 'exterior suitable lumber';

  const materials = [
    materialItem({
      id: 'garden-bed-boards',
      name: 'Raised bed boards',
      quantity: eightFootBoards,
      unit: '8 ft boards',
      confidence: 'medium',
      rationale: 'Boards form the bed walls; quantity includes courses based on bed height.',
      specs: [lumberSpec, 'nominal 2x6 or similar'],
      avoid: ['untreated short-life wood if long outdoor durability matters'],
      substitutions: [
        'Cedar lasts longer but costs more.',
        'Untreated pine is cheaper but usually has a shorter outdoor life.',
        'Concrete blocks can reduce cutting and fastening needs.'
      ],
      stores
    }),
    materialItem({
      id: 'corner-posts',
      name: 'Corner posts',
      quantity: 4,
      unit: 'posts',
      confidence: 'high',
      rationale: 'Posts stabilize the four corners and give boards a fastening surface.',
      specs: ['exterior suitable', '4x4 or similar'],
      stores
    }),
    materialItem({
      id: 'exterior-screws',
      name: 'Exterior screws',
      quantity: screwPounds,
      unit: '1 lb box',
      category: 'fastener',
      confidence: 'medium',
      rationale: 'Exterior-rated screws resist corrosion outdoors.',
      specs: ['exterior rated', '2.5 in to 3 in'],
      avoid: ['drywall screws', 'interior wood screws'],
      substitutions: ['Use stainless or coated fasteners in corrosive or wet conditions.'],
      stores
    }),
    materialItem({
      id: 'soil-mix',
      name: 'Raised bed soil mix',
      quantity: soilCubicFeet,
      unit: 'cu ft',
      confidence: 'medium',
      rationale: 'Soil quantity is calculated from bed volume before compaction.',
      specs: ['garden soil and compost blend'],
      stores
    }),
    materialItem({
      id: 'work-gloves',
      name: 'Work gloves',
      quantity: 1,
      unit: 'pair',
      category: 'safety',
      confidence: 'high',
      rationale: 'Gloves protect hands from splinters, soil, and sharp fasteners.',
      specs: ['general work gloves'],
      stores
    })
  ];

  const tools = [
    toolItem({
      id: 'drill-driver',
      name: 'Drill or driver',
      decision: ownedTools.includes('drill-driver') ? 'already_owned' : 'buy_or_borrow',
      rationale: 'Needed to drive exterior screws through the bed boards and posts.'
    }),
    toolItem({
      id: 'saw',
      name: 'Saw',
      decision: ownedTools.includes('saw') ? 'already_owned' : 'store_service_or_borrow',
      beginnerSafety: 'moderate',
      rationale: 'Needed only if boards are not cut to length by the store.',
      alternatives: ['Ask the store or lumber yard for simple straight cuts.']
    }),
    toolItem({
      id: 'tape-measure',
      name: 'Tape measure',
      decision: ownedTools.includes('tape-measure') ? 'already_owned' : 'buy',
      rationale: 'Used to verify board lengths, bed footprint, and final placement.'
    })
  ];

  return { materials, tools };
}

function buildWallShelvesPlan({ dimensions, ownedTools, stores }) {
  const shelfCount = roundUp(positiveNumber(dimensions.shelfCount, 2));
  const bracketCount = Math.max(shelfCount * 2, 2);

  const materials = [
    materialItem({
      id: 'shelf-boards',
      name: 'Shelf boards',
      quantity: shelfCount,
      unit: 'boards',
      confidence: 'high',
      rationale: 'One board is needed for each shelf run.',
      specs: [
        `${dimensions.shelfLengthInches} in length`,
        `${dimensions.shelfDepthInches} in depth`
      ],
      stores
    }),
    materialItem({
      id: 'shelf-brackets',
      name: 'Shelf brackets',
      quantity: bracketCount,
      unit: 'brackets',
      confidence: 'medium',
      rationale: 'Most simple shelves need at least two brackets per shelf.',
      specs: ['rated for expected load', 'depth compatible with shelf board'],
      avoid: ['decorative-only brackets for heavy storage'],
      stores
    }),
    materialItem({
      id: 'wall-fasteners',
      name: 'Wall fasteners',
      quantity: bracketCount * 2,
      unit: 'fasteners',
      category: 'fastener',
      confidence: 'low',
      rationale: 'Fastener type depends on wall material and load.',
      specs: ['match wall type', 'rated for expected load'],
      avoid: ['light-duty plastic anchors for heavy shelves'],
      substitutions: [
        'Use wood screws into studs when possible.',
        'Use masonry anchors for brick or concrete.',
        'Use toggle bolts only when appropriate for hollow walls.'
      ],
      stores
    }),
    materialItem({
      id: 'safety-glasses',
      name: 'Safety glasses',
      quantity: 1,
      unit: 'pair',
      category: 'safety',
      confidence: 'high',
      rationale: 'Eye protection is recommended while drilling.',
      stores
    })
  ];

  const tools = [
    toolItem({
      id: 'drill-driver',
      name: 'Drill or driver',
      decision: ownedTools.includes('drill-driver') ? 'already_owned' : 'buy_or_borrow',
      rationale: 'Needed to drill pilot holes and drive fasteners.'
    }),
    toolItem({
      id: 'level',
      name: 'Level',
      decision: ownedTools.includes('level') ? 'already_owned' : 'buy',
      rationale: 'Keeps shelves aligned before drilling.'
    }),
    toolItem({
      id: 'stud-finder',
      name: 'Stud finder',
      decision: ownedTools.includes('stud-finder') ? 'already_owned' : 'buy_or_borrow',
      rationale: 'Helps locate stronger mounting points in framed walls.'
    })
  ];

  return { materials, tools };
}

function buildPaintRoomPlan({ dimensions, stores }) {
  const roomLengthFeet = positiveNumber(dimensions.roomLengthFeet, 12);
  const roomWidthFeet = positiveNumber(dimensions.roomWidthFeet, 10);
  const ceilingHeightFeet = positiveNumber(dimensions.ceilingHeightFeet, 8);
  const coats = positiveNumber(dimensions.coats, 2);
  const wallArea = 2 * (roomLengthFeet + roomWidthFeet) * ceilingHeightFeet;
  const gallons = Math.max(1, roundUp((wallArea * coats) / 350));

  const materials = [
    materialItem({
      id: 'interior-paint',
      name: 'Interior paint',
      quantity: gallons,
      unit: 'gallon',
      confidence: 'medium',
      rationale: 'Paint quantity assumes two coats and roughly 350 square feet per gallon.',
      specs: ['interior', 'finish appropriate for room use'],
      substitutions: [
        'Use bathroom-rated paint in humid rooms.',
        'Use more durable finishes for high-traffic spaces.'
      ],
      stores
    }),
    materialItem({
      id: 'painter-tape',
      name: 'Painter tape',
      quantity: 1,
      unit: 'roll',
      category: 'consumable',
      confidence: 'high',
      rationale: 'Protects trim, outlets, and edges while painting.',
      stores
    }),
    materialItem({
      id: 'drop-cloth',
      name: 'Drop cloth',
      quantity: 1,
      unit: 'cloth',
      category: 'cleanup',
      confidence: 'high',
      rationale: 'Protects floors and furniture from drips.',
      stores
    })
  ];

  const tools = [
    toolItem({
      id: 'roller-frame',
      name: 'Paint roller frame',
      decision: 'buy_or_already_owned',
      rationale: 'Covers wall area faster than brushing alone.'
    }),
    toolItem({
      id: 'paint-brush',
      name: 'Angled paint brush',
      decision: 'buy_or_already_owned',
      rationale: 'Used for cutting in around edges, trim, and corners.'
    })
  ];

  return { materials, tools };
}

const PLAN_BUILDERS = {
  'raised-garden-bed': buildRaisedGardenBedPlan,
  'wall-shelves': buildWallShelvesPlan,
  'paint-room': buildPaintRoomPlan
};

export function createDiyProjectPlan(input) {
  const template = getProjectTemplate(input.projectId);

  if (!template) {
    throw new Error(`Unknown DIY project template: ${input.projectId}`);
  }

  const dimensions = mergeDimensions(template, input.dimensions);
  const ownedTools = input.ownedTools || [];
  const stores = input.preferredStores || [];
  const qualityTier = input.qualityTier || QUALITY_TIERS.balanced;
  const builder = PLAN_BUILDERS[template.id];
  const { materials, tools } = builder({ dimensions, qualityTier, ownedTools, stores });

  return {
    projectId: template.id,
    title: template.title,
    category: template.category,
    riskLevel: template.riskLevel,
    location: {
      ...DEFAULT_LOCATION,
      ...(input.location || {})
    },
    dimensions,
    requiredMeasurements: template.requiredMeasurements,
    clarifyingQuestions: template.clarifyingQuestions,
    safetyNotes: template.safetyNotes,
    materials,
    tools,
    shoppingModes: ['one-stop', 'cheapest', 'available-today', 'local-independent'],
    confidence: materials.some((item) => item.confidence === 'low') ? 'medium' : 'high'
  };
}

export function listDiyProjectTemplates() {
  return [
    'raised-garden-bed',
    'wall-shelves',
    'paint-room'
  ];
}
