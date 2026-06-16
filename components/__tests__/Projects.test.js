import Projects from '../Projects';

describe('Projects navigation helpers', () => {
  const proj = new Projects();

  test('getNextProject cycles through projects', () => {
    const projects = proj.projects;
    for (let i = 0; i < projects.length - 1; i++) {
      expect(proj.getNextProject(projects[i].name)).toBe(projects[i + 1]);
    }
    expect(proj.getNextProject(projects[projects.length - 1].name)).toBe(projects[0]);
  });

  test('getPrevProject cycles backwards', () => {
    const projects = proj.projects;
    for (let i = 1; i < projects.length; i++) {
      expect(proj.getPrevProject(projects[i].name)).toBe(projects[i - 1]);
    }
    expect(proj.getPrevProject(projects[0].name)).toBe(projects[projects.length - 1]);
  });

  test('returns null when navigating from unknown project name', () => {
    expect(proj.getNextProject('Nonexistent Project')).toBeNull();
    expect(proj.getPrevProject('Nonexistent Project')).toBeNull();
  });

  test('exposes featured work with problem-first headings and status labels', () => {
    const featured = proj.featuredProjects;

    expect(featured).toHaveLength(3);
    expect(featured.map((project) => project.projectName)).toEqual([
      'Thesis',
      'Writing',
      'Archive'
    ]);
    expect(featured.map((project) => project.link)).toEqual([
      '/thesis',
      '/writing',
      '/projects'
    ]);
    expect(featured[0].label).toBe('Research');
    expect(featured[1].label).toBe('Writing');
    const last = featured[featured.length - 1];
    expect(last.problemTitle).toBe('Older work, kept in context');
    expect(last.label).toBe('Archive');
    expect(last.archive).toBe(false);
  });

  test('keeps older case studies in the archive', () => {
    const archiveProjects = proj.projects.map((project) => project.projectName);

    expect(archiveProjects).toEqual([
      'Thesis',
      'HRI Study',
      'Kiva Kaupunki',
      'Aikakone'
    ]);
  });
});
