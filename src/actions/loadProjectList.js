import { appendChild } from '../utils/append';
import loadTask from './loadTasks';
import state from '../state';
import Project from '../logic/project';


export default function loadProjectList(projectList) {
  document.querySelector('#projectList').innerHTML = '';
  appendChild('#projectList', 'Project List', 'project-list', 'h2');
  projectList.forEach(project => {
    const projectListElem = appendChild('#projectList', `<p class='project-name'>${project.name}</p>`, project.id, 'div');
    projectListElem.querySelector('.project-name').addEventListener('click', () => {
      document.querySelector('#tasks').innerHTML = '';
      loadTask(project);
    });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('text-color-black');
    deleteButton.innerHTML = 'Delete';

    deleteButton.addEventListener('click', () => {
      const target = document.querySelector(`#${project.id}`);
      state.projectList.deleteProject(project.id);
      target.parentElement.removeChild(target);
      const targetTaskContainer = document.getElementById(`project${project.id}`);
      const tasks = document.getElementById('tasks');

      if (targetTaskContainer) {
        tasks.removeChild(targetTaskContainer);
      }
      document.querySelector('.edit-task').innerHTML = '';
      const inputTask = document.querySelector('#add-task');
      inputTask.parentElement.removeChild(inputTask);
    });
    projectListElem.appendChild(deleteButton);
  });
  const inputProject = appendChild('#projectList', '', 'add-project', 'input');
  inputProject.type = 'text';
  inputProject.classList.add('text-color-black');


  inputProject.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
      const newProject = new Project(inputProject.value);
      state.projectList.addProject(newProject);
      loadProjectList(state.projectList.projects);
    }
  });
}