import { appendChild } from '../utils/append';
import TaskInformation from '../components/TaskInformation/index';
import state from '../state';
import go from './navigation';
import loadTasks from './loadTasks';

const feather = require('feather-icons');

export default function loadTaskInformation(task, projectId) {
  document.querySelector('.edit-task').innerHTML = '';
  const navigation = appendChild('.edit-task', `<i class="icon-container to-tasks">${feather.icons['arrow-left'].toSvg()}</i>`, '', 'div');
  navigation.classList.add('navigation');
  navigation.querySelector('.to-tasks').addEventListener('click', () => {
    go('.edit-task', '.task-container');
  });
  appendChild('.edit-task', TaskInformation(task), task.id, 'div');

  const form = document.querySelector('#edit-task-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const editedTask = {};
    editedTask.title = document.querySelector('#task-title').value;
    editedTask.description = document.querySelector('#task-description').value;
    editedTask.dueDate = document.querySelector('#task-duedate').value;
    editedTask.priority = document.querySelector('#task-priority').value;

    state.projectList.findProject(projectId).editTask(task.id, editedTask);

    document.querySelector(`#task${task.id} > .task-title`).innerHTML = task.title;

    loadTasks(state.projectList.findProject(projectId));
    go('.edit-task', '.task-container');
  });
}