import { appendChild } from '../utils/append';
import TaskInformation from '../components/TaskInformation/index';
import state from '../state';

export default function loadTaskInformation(task, projectId) {
  document.querySelector('.edit-task').innerHTML = '';

  appendChild('.edit-task', TaskInformation(task), task.id, 'div');

  const form = document.querySelector('#edit-task-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const editedTask = {};
    editedTask.title = document.querySelector('#task-title').value;
    editedTask.description = document.querySelector('#task-description').value;
    editedTask.dueDate = document.querySelector('#task-duedate').value;
    editedTask.priority = document.querySelector('#task-priority').value;
    editedTask.done = document.querySelector('#task-done').checked;

    state.projectList.findProject(projectId).editTask(task.id, editedTask);

    document.querySelector(`#${task.id} > .task-title`).innerHTML = task.title;
  });
}