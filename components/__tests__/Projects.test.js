import Projects from '../Projects';

describe('Projects navigation helpers', () => {
  const proj = new Projects();

  test('getNextProject cycles through projects', () => {
    const first = proj.projects[0];
    const second = proj.projects[1];
    const third = proj.projects[2];
    expect(proj.getNextProject(first.name)).toBe(second);
    expect(proj.getNextProject(second.name)).toBe(third);
    expect(proj.getNextProject(third.name)).toBe(first);
  });

  test('getPrevProject cycles backwards', () => {
    const first = proj.projects[0];
    const second = proj.projects[1];
    const third = proj.projects[2];
    expect(proj.getPrevProject(first.name)).toBe(third);
    expect(proj.getPrevProject(second.name)).toBe(first);
    expect(proj.getPrevProject(third.name)).toBe(second);
  });
});
