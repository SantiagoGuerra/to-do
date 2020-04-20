import { appendChild } from '../utils/append';
import loadTask from './loadTasks';
import state from '../state';
import Project from '../logic/project';
import createElementFrom from '../utils/createElementFrom';
import go from './navigation';

const feather = require('feather-icons');


export default function loadProjectList(projectList) {
  document.querySelector('#projectList').innerHTML = '';
  const projectListTitle = appendChild('#projectList', 'Project List', '', 'h2');
  projectListTitle.classList.add('project-list-title');

  const folderIcon = feather.icons.folder;
  folderIcon.attrs.class += ' project-list-folder-icon';

  appendChild('#projectList', '', 'project-list-container', 'div').classList.add('project-list-container');

  projectList.forEach(project => {
    const projectListElem = appendChild('#project-list-container',
      `${folderIcon.toSvg()}
      <p class='project-name'>${project.name}</p>
      <span class="project-list-number-of-tasks" id="number-of-tasks${project.id}">${project.tasks.length}</span>
      `,
      project.id, 'div');
    projectListElem.classList.add('project-list-project');

    projectListElem.querySelector('.project-name').addEventListener('click', () => {
      document.querySelector('#tasks').innerHTML = '';
      loadTask(project);
      go('.project-list', '.task-container');
    });

    const deleteButton = createElementFrom(feather.icons['trash-2'].toSvg());
    deleteButton.classList.add('project-list-delete');

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
      if (true && state.projectList.projects.length === 0) {
        inputTask.parentElement.removeChild(inputTask);
      }
    });
    projectListElem.appendChild(deleteButton);
  });
  const inputProject = appendChild('#projectList', '', 'add-project', 'input');
  inputProject.type = 'text';
  inputProject.classList.add('project-list-input-project');
  inputProject.setAttribute('placeholder', 'Create a new Project');


  inputProject.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
      const newProject = new Project(inputProject.value);
      state.projectList.addProject(newProject);
      loadProjectList(state.projectList.projects);
    }
  });
  appendChild('#projectList', `Created and designed by:<br> 
  <a href="http://santiagoguerra.github.io/">Santiago Guerra</a><br> 
  & <br><a href="http://www.ivanderlich.com/">Ivan Derlich</a>`, '', 'div')
    .classList.add('credits');
}