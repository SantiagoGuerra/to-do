export default class ProjectList {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }

  deleteProject(inputId) {
    this.projects.forEach((project, i) => {
      if (project.id === inputId) {
        this.projects.splice(i, 1);
        return 0;
      }
      return -1;
    });
  }
}