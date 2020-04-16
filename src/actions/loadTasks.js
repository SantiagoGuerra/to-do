import { appendChild } from '../utils/append';
import loadTaskInformation from './loadTaskInformation';
import state from '../state';
import Task from '../logic/task';

export default function loadTasks(project) {
  const taskContainerID = `project${project.id}`;
  document.querySelector('#tasks').innerHTML = '';
  appendChild('#tasks', '', taskContainerID, 'div');
  project.tasks.forEach(task => {
    const projectElem = appendChild(`#${taskContainerID}`, `<p class='task-title'>${task.title}</p>      `, task.id, 'div');
    projectElem.querySelector('.task-title').addEventListener('click', () => {
      loadTaskInformation(task, project.id);
    });


    const deleteButton = document.createElement('button');
    deleteButton.classList.add('text-color-black');
    deleteButton.innerHTML = 'Delete';

    deleteButton.addEventListener('click', () => {
      const targetProject = document.querySelector(`#project${project.id}`);
      const targetTask = document.querySelector(`#${task.id}`);
      state.projectList.findProject(project.id).deleteTask(task.id);
      targetProject.removeChild(targetTask);
      document.querySelector('.edit-task').innerHTML = '';
    });
    projectElem.appendChild(deleteButton);
  });
  const inputTask = appendChild(`#${taskContainerID}`, '', 'add-project', 'input');
  inputTask.type = 'text';
  inputTask.classList.add('text-color-black');
  inputTask.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
      const newTask = new Task(inputTask.value);
      const projectState = state.projectList.findProject(project.id);
      projectState.addTask(newTask);
      loadTasks(projectState);
    }
  });
}