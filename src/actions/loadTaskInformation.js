import { appendChild } from '../utils/append';
import TaskInformation from '../components/TaskInformation/index';

export default function loadTaskInformation(task) {
  document.querySelector('.edit-task').innerHTML = '';

  appendChild('.edit-task', TaskInformation(task.title, task.description), task.id, 'div');

  // projectElem.addEventListener('click', e => {
  //   console.log(task.title)
  // })
}