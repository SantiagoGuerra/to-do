import { appendChild } from '../utils/append';
import loadTaskInformation from './loadTaskInformation';
import state from '../state';
import Task from '../logic/task';
import createElementFrom from '../utils/createElementFrom';
import go from './navigation';

const feather = require('feather-icons');

export default function loadTasks(project) {
  const taskContainerID = `project${project.id}`;
  const numberOfTaskTarget = document.querySelector(`#number-of-tasks${project.id}`);
  document.querySelector('#tasks').innerHTML = '';
  const navigation = appendChild('#tasks', `<i class="icon-container to-project-list">${feather.icons['arrow-left'].toSvg()}</i>`, '', 'a');
  navigation.classList.add('navigation');
  navigation.querySelector('.to-project-list').addEventListener('click', () => {
    go('.task-container', '.project-list');
  });
  appendChild('#tasks', project.name, '', 'h2').classList.add('task-project-title');
  appendChild('#tasks', '', taskContainerID, 'div').classList.add('task-list');
  project.tasks.forEach(task => {
    const iconIdString = `${task.done ? 'check-' : ''}circle`;
    const projectElem = appendChild(`#${taskContainerID}`, `
      <span id="checked${task.id}">${feather.icons[iconIdString].toSvg()}</span>
      <p class='task-title'>${task.title}</p>`,
    `task${task.id}`, 'div');

    const checked = document.querySelector(`#checked${task.id}`);
    const taskContainer = checked.parentElement;
    const taskState = state.projectList.findProject(project.id).findTask(task.id);

    if (taskState.done) {
      taskContainer.classList.add('task-done');
      checked.innerHTML = feather.icons[iconIdString].toSvg();
    } else {
      taskContainer.classList.remove('task-done');
      checked.innerHTML = feather.icons[iconIdString].toSvg();
    }

    checked.addEventListener('click', () => {
      taskState.edit({ done: !taskState.done });

      const iconIdStringState = `${taskState.done ? 'check-' : ''}circle`;

      if (taskState.done) {
        taskContainer.classList.add('task-done');
        checked.innerHTML = feather.icons[iconIdStringState].toSvg();
      } else {
        taskContainer.classList.remove('task-done');
        checked.innerHTML = feather.icons[iconIdStringState].toSvg();
      }
    });


    projectElem.querySelector('.task-title').addEventListener('click', () => {
      loadTaskInformation(task, project.id);
      go('.task-container', '.edit-task');
    });


    const deleteButton = createElementFrom(feather.icons['trash-2'].toSvg());
    deleteButton.classList.add('delete-button');

    deleteButton.addEventListener('click', () => {
      const targetProject = document.querySelector(`#project${project.id}`);
      const targetTask = document.querySelector(`#task${task.id}`);
      state.projectList.findProject(project.id).deleteTask(task.id);
      targetProject.removeChild(targetTask);
      document.querySelector('.edit-task').innerHTML = '';
      numberOfTaskTarget.innerHTML = state.projectList.findProject(project.id).tasks.length;
    });
    projectElem.appendChild(deleteButton);
    projectElem.classList.add('task-item');
  });
  const inputTask = appendChild('#tasks', '', 'add-task', 'input');
  inputTask.type = 'text';
  inputTask.classList.add('add-new-task');
  inputTask.setAttribute('placeholder', 'Create a new task');
  inputTask.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
      const newTask = new Task(inputTask.value);
      const projectState = state.projectList.findProject(project.id);
      projectState.addTask(newTask);
      loadTasks(projectState);
      numberOfTaskTarget.innerHTML = state.projectList.findProject(project.id).tasks.length;
    }
  });
}