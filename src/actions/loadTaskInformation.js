import { appendChild } from '../utils/append';
import TaskInformation from '../components/TaskInformation/index';
import state from '../state';

export default function loadTaskInformation(task, projectId) {
  document.querySelector('.edit-task').innerHTML = '';

  appendChild('.edit-task', TaskInformation(task), task.id, 'div');
  // const sendFormButton = document.querySelector('#send-form-button');
  // console.log(sendFormButton);
  // sendFormButton.addEventListener('click', e => {
  //   e.preventDefault();
  // });

  const form = document.querySelector('#edit-task-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const editedTask = {};
    editedTask.title = document.querySelector('#task-title').value;
    editedTask.description = document.querySelector('#task-description').value;
    editedTask.dueDate = document.querySelector('#task-duedate').value;
    editedTask.priority = document.querySelector('#task-priority').value;
    editedTask.done = document.querySelector('#task-done').checked;

    //save edited task to state
    state.projectList.findProject(projectId).editTask(task.id, editedTask);
    console.log(state.projectList);

    //load tasks again

    //console.log(editedTask);
    
  });
  // projectElem.addEventListener('click', e => {
  //   console.log(task.title)
  // })
}