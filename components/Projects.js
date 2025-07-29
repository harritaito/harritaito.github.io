import robotImage from '../static/media/home/languagerobot.jpg';
import kivakaupunkiImage from '../static/media/home/kivakaupunki.jpg';
import aikakoneImage from '../static/media/home/aikakone.jpg';

class Projects {

  projects = [
    {
      name: "HRI Study",
      description: "Human-Robot Interaction on language learning.",
      image: robotImage,
      link: "/hri-study",
      alt: "Human-Robot Interaction",
      color: "red"
    },
    {
      name: "Kiva Kaupunki",
      description: "From thoughts to action...",
      image: kivakaupunkiImage,
      link: "/kivakaupunki",
      alt: "Application for city reporting",
      color: "blue"
    },
    {
      name: "Aikakone",
      description: "Dementia/Alzheimer diseases increasing and growing ..",
      image: aikakoneImage,
      link: "/aikakone",
      alt: "Concept service for people with memory deseaces",
      color: "purple"
    },
  ];

  getIndexOfProject = (project) => {
    return this.projects.findIndex(x => x.name === project);
  };

  getNextProject = (project) => {
    const index = this.getIndexOfProject(project);
    return this.projects[(index + 1) % this.projects.length];
  };

  getPrevProject = (project) => {
    const index = this.getIndexOfProject(project);
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
