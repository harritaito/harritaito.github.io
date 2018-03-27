import kivakaupunkiImage from '../static/media/home/kivakaupunki.jpg';
import aikakoneImage from '../static/media/home/aikakone.jpg';

class Projects {

  projects = [
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

    let index = this.getIndexOfProject(project);

    if (index + 1 > this.projects.length - 1) {
      return this.projects[0]
    }

    return this.projects[index + 1];
  };

  getPrevProject = (project) => {

    let index = this.getIndexOfProject(project);

    if (index - 1 < 0) {
      return this.projects[this.projects.length - 1]
    }

    return this.projects[index - 1];
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
