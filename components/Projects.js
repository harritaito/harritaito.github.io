import robotImage from '../static/media/home/languagerobot.jpg';
import kivakaupunkiImage from '../static/media/home/kivakaupunki.jpg';
import aikakoneImage from '../static/media/home/aikakone.jpg';
import placeholderTexture from '../static/media/pohja.svg';

const PROJECT_MANIFEST = [
  {
    name: "HRI Study",
    projectName: "HRI Study",
    problemTitle: "Trust-sensitive classroom robot design",
    description: "Observation, teacher interviews, and theatrical prototyping shaped how a teaching-assistant robot should behave around classroom rituals.",
    image: robotImage,
    link: "/hri-study",
    alt: "Human-Robot Interaction",
    color: "red",
    label: "Archive",
    featuredOrder: 2,
    archive: true,
    featured: true,
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
    label: "Archive",
    featuredOrder: 1,
    archive: true,
    featured: true,
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
    label: "Concept",
    featuredOrder: 3,
    archive: true,
    featured: true,
  },
  {
    name: "AI and data decision support",
    projectName: "AI and data decision support",
    problemTitle: "Coming soon",
    description: "This shell is reserved for product work where AI and data help teams make decisions they can explain, review, and trust.",
    image: placeholderTexture,
    link: "/projects",
    alt: "Paper texture placeholder for an in-development case study shell",
    color: "grey",
    label: "In development",
    featuredOrder: 4,
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
