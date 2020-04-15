import { appendChild } from '../utils/append';
import TaskInformation from '../components/TaskInformation/index';

export default function loadTaskInformation(task) {
  document.querySelector('.edit-task').innerHTML = '';

  appendChild('.edit-task', TaskInformation(task), task.id, 'div');
  const sendFormButton = document.querySelector('#send-form-button');
  // console.log(sendFormButton);
  sendFormButton.addEventListener('click', e => {
    e.preventDefault();
  });


  // projectElem.addEventListener('click', e => {
  //   console.log(task.title)
  // })
}