import { createDiyProjectPlan, listDiyProjectTemplates } from '../diy-planner';

describe('DIY project planner', () => {
  test('lists the initial project templates without wiring them into the site', () => {
    expect(listDiyProjectTemplates()).toEqual([
      'raised-garden-bed',
      'wall-shelves',
      'paint-room'
    ]);
  });

  test('creates a localized raised garden bed shopping plan', () => {
    const plan = createDiyProjectPlan({
      projectId: 'raised-garden-bed',
      location: { country: 'US', postalCode: '10001' },
      preferredStores: ['Ace', 'Home Depot'],
      ownedTools: ['drill-driver', 'tape-measure'],
      qualityTier: 'durable',
      dimensions: {
        lengthInches: 96,
        widthInches: 48,
        heightInches: 18
      }
    });

    expect(plan.title).toBe('Raised garden bed');
    expect(plan.location.postalCode).toBe('10001');
    expect(plan.materials).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 'garden-bed-boards',
          quantity: 9,
          specs: expect.arrayContaining(['cedar'])
        }),
        expect.objectContaining({
          id: 'soil-mix',
          quantity: 48,
          unit: 'cu ft'
        })
      ])
    );
    expect(plan.tools).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 'drill-driver', buyRentBorrow: 'already_owned' })
      ])
    );
    expect(plan.materials[0].shoppingSearch.stores).toEqual([
      expect.objectContaining({ store: 'Ace' }),
      expect.objectContaining({ store: 'Home Depot' })
    ]);
  });

  test('marks shelf fastener confidence low because wall type and load are unresolved', () => {
    const plan = createDiyProjectPlan({
      projectId: 'wall-shelves',
      preferredStores: ['Lowe\'s'],
      dimensions: {
        shelfCount: 2,
        shelfLengthInches: 36,
        shelfDepthInches: 10
      }
    });

    const fasteners = plan.materials.find((item) => item.id === 'wall-fasteners');

    expect(plan.riskLevel).toBe('medium');
    expect(plan.confidence).toBe('medium');
    expect(fasteners.confidence).toBe('low');
    expect(fasteners.avoid).toContain('light-duty plastic anchors for heavy shelves');
  });

  test('calculates room paint quantity from wall area and coats', () => {
    const plan = createDiyProjectPlan({
      projectId: 'paint-room',
      dimensions: {
        roomLengthFeet: 12,
        roomWidthFeet: 10,
        ceilingHeightFeet: 8,
        coats: 2
      }
    });

    expect(plan.materials).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 'interior-paint',
          quantity: 3,
          unit: 'gallon'
        })
      ])
    );
  });
});
