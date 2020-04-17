import { appendChild } from '../utils/append';
import loadTask from './loadTasks';
import state from '../state';
import Project from '../logic/project';
import createElementFrom from '../utils/createElementFrom';

const feather = require('feather-icons');


export default function loadProjectList(projectList) {
  document.querySelector('#projectList').innerHTML = '';
  const projectListTitle = appendChild('#projectList', 'Project List', '', 'h2');
  projectListTitle.classList.add('project-list-title');

  const folderIcon = feather.icons.folder;
  folderIcon.attrs.class += ' project-list-folder-icon';
  //  console.dir(folderIcon.attrs.class);

  projectList.forEach(project => {
    const projectListElem = appendChild('#projectList',
      `${folderIcon.toSvg()}
      <p class='project-name'>${project.name}</p>
      <span class="project-list-number-of-tasks" >6</span>
      `,
      project.id, 'div');
    projectListElem.classList.add('project-list-project');

    projectListElem.querySelector('.project-name').addEventListener('click', () => {
      document.querySelector('#tasks').innerHTML = '';
      loadTask(project);
    });

    const deleteButton = createElementFrom(feather.icons['trash-2'].toSvg());
    deleteButton.classList.add('project-list-delete');
    //deleteButton.innerHTML = 'Delete';

    // const deleteButton = document.createElement('button');
    // deleteButton.classList.add('project-list-delete');
    // deleteButton.innerHTML = 'Delete';

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