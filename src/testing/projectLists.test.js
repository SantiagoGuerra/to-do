/* eslint-disable no-console */
import ProjectList from '../logic/projectList';
import Project from '../logic/project';


console.log('---Create a ProjectList---');
const projectList = new ProjectList();
console.log(projectList);
console.log('-----------------');


console.log('---Add a project in the ProjectList---');
const project = new Project('Microverse');
projectList.addProject(project);
console.log(projectList);
console.log('-----------------');


console.log('----Delete a project in the ProjectList--');
projectList.deleteProject(project.id);
console.log(projectList);
console.log('-----------------');