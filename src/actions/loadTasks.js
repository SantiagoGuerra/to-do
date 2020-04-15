import { appendChild } from '../utils/append';
import loadTaskInformation from './loadTaskInformation';
import state from '../state';
import Task from '../logic/task';

export default function loadTasks(project) {
  const taskContainerID = `project${project.id}`;
  document.querySelector('#tasks').innerHTML = '';
  appendChild('#tasks', '', taskContainerID, 'div');
  project.tasks.forEach(task => {
    const projectElem = appendChild(`#${taskContainerID}`, `<p>${task.title}</p>      `, task.id, 'div');
    projectElem.addEventListener('click', () => {
      loadTaskInformation(task);
    });
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