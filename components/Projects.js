import robotImage from '../static/media/home/languagerobot.jpg';
import kivakaupunkiImage from '../static/media/home/kivakaupunki.jpg';
import aikakoneImage from '../static/media/home/aikakone.jpg';

class Projects {

  projects = [
    {
      name: "HRI Study",
      description: "Observation, teacher interviews, and theatrical prototyping for a classroom robot concept.",
      image: robotImage,
      link: "/hri-study",
      alt: "Human-Robot Interaction",
      color: "red",
      label: "Older work"
    },
    {
      name: "Kiva Kaupunki",
      description: "A citizen feedback platform shaped through service design, interface sketches, and an MVP.",
      image: kivakaupunkiImage,
      link: "/kivakaupunki",
      alt: "Application for city reporting",
      color: "blue",
      label: "Older work"
    },
    {
      name: "Aikakone",
      description: "A memory-care reminiscence service explored through field research, service blueprinting, and prototype sessions.",
      image: aikakoneImage,
      link: "/aikakone",
      alt: "Concept service for memory care",
      color: "purple",
      label: "Older work"
    },
  ];

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
