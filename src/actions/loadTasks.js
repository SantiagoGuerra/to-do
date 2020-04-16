import { appendChild } from '../utils/append';
import loadTaskInformation from './loadTaskInformation';
import state from '../state';
import Task from '../logic/task';

export default function loadTasks(project) {
  const taskContainerID = `project${project.id}`;
  document.querySelector('#tasks').innerHTML = '';
  appendChild('#tasks', project.name, '', 'h2').classList.add('task-project-title');
  appendChild('#tasks', '', taskContainerID, 'div').classList.add('task-list');
  project.tasks.forEach(task => {
    const projectElem = appendChild(`#${taskContainerID}`, `<p class='task-title'>${task.title}</p>      `, task.id, 'div');
    projectElem.querySelector('.task-title').addEventListener('click', () => {
      loadTaskInformation(task, project.id);
    });


    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = 'Delete';

    deleteButton.addEventListener('click', () => {
      const targetProject = document.querySelector(`#project${project.id}`);
      const targetTask = document.querySelector(`#${task.id}`);
      state.projectList.findProject(project.id).deleteTask(task.id);
      targetProject.removeChild(targetTask);
      document.querySelector('.edit-task').innerHTML = '';
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
    }
  });
}