export const QUALITY_TIERS = {
  budget: 'budget',
  balanced: 'balanced',
  durable: 'durable'
};

export const PROJECT_TEMPLATES = [
  {
    id: 'raised-garden-bed',
    title: 'Raised garden bed',
    category: 'outdoor-garden',
    riskLevel: 'low',
    defaultUnits: 'imperial',
    defaultDimensions: {
      lengthInches: 96,
      widthInches: 48,
      heightInches: 18
    },
    requiredMeasurements: ['lengthInches', 'widthInches', 'heightInches'],
    clarifyingQuestions: [
      'Is this for edible plants?',
      'Do you own a drill and a saw?',
      'Would you prefer cedar, pressure-treated lumber, or a lower-cost alternative?'
    ],
    safetyNotes: [
      'Wear gloves when handling lumber, soil, and fasteners.',
      'Confirm there are no buried utilities before digging or anchoring into the ground.',
      'If growing food, choose materials you are comfortable using around edible plants.'
    ]
  },
  {
    id: 'wall-shelves',
    title: 'Wall shelves',
    category: 'home-improvement',
    riskLevel: 'medium',
    defaultUnits: 'imperial',
    defaultDimensions: {
      shelfCount: 2,
      shelfLengthInches: 36,
      shelfDepthInches: 10
    },
    requiredMeasurements: ['shelfCount', 'shelfLengthInches', 'shelfDepthInches'],
    clarifyingQuestions: [
      'What wall type are you mounting into?',
      'What will sit on the shelves?',
      'Do you know where the studs are?'
    ],
    safetyNotes: [
      'Fastener choice depends on wall type and expected load.',
      'Mount heavy shelves into studs or masonry, not only light-duty drywall anchors.',
      'Use eye protection while drilling.'
    ]
  },
  {
    id: 'paint-room',
    title: 'Paint a room',
    category: 'home-improvement',
    riskLevel: 'low',
    defaultUnits: 'imperial',
    defaultDimensions: {
      roomLengthFeet: 12,
      roomWidthFeet: 10,
      ceilingHeightFeet: 8,
      coats: 2
    },
    requiredMeasurements: [
      'roomLengthFeet',
      'roomWidthFeet',
      'ceilingHeightFeet',
      'coats'
    ],
    clarifyingQuestions: [
      'Are you painting over a dark color?',
      'Is the room humid or high traffic?',
      'Do you already have rollers, brushes, trays, and drop cloths?'
    ],
    safetyNotes: [
      'Ventilate the room while painting.',
      'Use a stable ladder or step stool for high edges.',
      'If older paint may contain lead, test it before sanding or scraping.'
    ]
  }
];

export function getProjectTemplate(projectId) {
  return PROJECT_TEMPLATES.find((template) => template.id === projectId);
}
