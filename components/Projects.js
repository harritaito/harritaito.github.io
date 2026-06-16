import robotImage from '../static/media/home/languagerobot.jpg';
import kivakaupunkiImage from '../static/media/home/kivakaupunki.jpg';
import aikakoneImage from '../static/media/home/aikakone.jpg';
import placeholderTexture from '../static/media/pohja.svg';

const PROJECT_MANIFEST = [
  {
    name: "Interaction Design Principles for Industrial XR",
    projectName: "Thesis",
    problemTitle: "Interaction design for environments that break the rules",
    description: "A research-led set of principles for XR in industrial settings — where gloves, noise, and physical load make most interface assumptions wrong.",
    image: placeholderTexture,
    link: "/thesis",
    alt: "Master's thesis on interaction design principles for industrial XR",
    color: "green",
    label: "Research",
    featuredOrder: 1,
    archive: true,
    featured: true,
  },
  {
    name: "HRI Study",
    projectName: "HRI Study",
    problemTitle: "Trust-sensitive classroom robot design",
    description: "Observation, teacher interviews, and theatrical prototyping shaped how a teaching-assistant robot should behave around classroom rituals.",
    image: robotImage,
    link: "/hri-study",
    alt: "Human-Robot Interaction",
    color: "red",
    label: "Older work",
    featuredOrder: 3,
    archive: true,
    featured: false,
  },
  {
    name: "Kiva Kaupunki",
    projectName: "Kiva Kaupunki",
    problemTitle: "Operational complexity in civic reporting",
    description: "A civic feedback idea translated into a map-based MVP with service design, interface sketches, and implementation support.",
    image: kivakaupunkiImage,
    link: "/kivakaupunki",
    alt: "Application for city reporting",
    color: "blue",
    label: "Older work",
    featuredOrder: 4,
    archive: true,
    featured: false,
  },
  {
    name: "Aikakone",
    projectName: "Aikakone",
    problemTitle: "Discovery for memory-care services",
    description: "Field research, service blueprinting, and facilitated prototype sessions explored what families, staff, and residents would need to trust.",
    image: aikakoneImage,
    link: "/aikakone",
    alt: "Concept service for memory care",
    color: "purple",
    label: "Concept work",
    featuredOrder: 5,
    archive: true,
    featured: false,
  },
  {
    name: "Writing",
    projectName: "Writing",
    problemTitle: "Notes on design, systems, and research",
    description: "Longer-form notes and reflections on how design work becomes clear enough to use.",
    image: placeholderTexture,
    link: "/writing",
    alt: "Paper texture placeholder for writing notes",
    color: "purple",
    label: "Writing",
    featuredOrder: 2,
    archive: false,
    featured: true,
  },
  {
    name: "Archive",
    projectName: "Archive",
    problemTitle: "Older work, kept in context",
    description: "Course, concept, and community projects kept visible with clear labels about what shipped, what was explored, and what belongs to an earlier chapter.",
    image: placeholderTexture,
    link: "/projects",
    alt: "Paper texture placeholder for the project archive",
    color: "grey",
    label: "Archive",
    featuredOrder: 3,
    archive: false,
    featured: true,
  },
];

class Projects {
  get projects() {
    return PROJECT_MANIFEST.filter((project) => project.archive);
  }

  get featuredProjects() {
    return PROJECT_MANIFEST
      .filter((project) => project.featured)
      .slice()
      .sort((a, b) => a.featuredOrder - b.featuredOrder);
  }

  getIndexOfProject = (project) => {
    return this.projects.findIndex(x => x.name === project);
  };

  getNextProject = (project) => {
    const index = this.getIndexOfProject(project);
    if (index === -1) {
      return null;
    }
    return this.projects[(index + 1) % this.projects.length];
  };

  getPrevProject = (project) => {
    const index = this.getIndexOfProject(project);
    if (index === -1) {
      return null;
    }
    return this.projects[(index - 1 + this.projects.length) % this.projects.length];
  };

  getRandomProject = () => {
    let random = Math.floor(Math.random() * Math.floor(this.projects.length));
    return this.projects[random];
  }

  getProjectsMinusCurrent = (project) => {

    let modProjects = this.projects.slice();
    let index = this.getIndexOfProject(project);
    if (index > -1)
      modProjects.splice(index, 1);

    return modProjects;
  };

}

export default Projects;
