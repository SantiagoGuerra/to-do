import { appendChild } from '../utils/append';
import loadTask from './loadTasks';
import state from '../state';
import Project from '../logic/project';


export default function loadProjectList(projectList) {
  document.querySelector('#projectList').innerHTML = '';
  projectList.forEach(project => {
    // let projectID = document.querySelector('p')
    // console.log(projectID)
    let projectListElem = appendChild('#projectList', `<p>${project.name}</p>`, project.id, 'div');

    projectListElem.addEventListener('click', e => {
      document.querySelector('#tasks').innerHTML = ''
      loadTask(project.tasks);
    });
  });
  const inputProject = appendChild('#projectList', '', 'add-project', 'input');
  inputProject.type = 'text';
  inputProject.classList.add('text-color-black');
  inputProject.addEventListener('keyup', e => {
    if (e.key === 'Enter') {      
      const newProject = new Project(inputProject.value);
      state.projectList.addProject(newProject);
      loadProjectList(state.projectList.projects);
  });
}