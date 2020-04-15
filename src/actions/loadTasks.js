import { appendChild } from '../utils/append';
import loadTaskInformation from './loadTaskInformation';

export default function loadTasks(project) {
  const taskContainerID = `project${project.id}`;
  appendChild('#tasks', '', taskContainerID, 'div');
  project.tasks.forEach(task => {
    const projectElem = appendChild(`#${taskContainerID}`, `<p>${task.title}</p>`, task.id, 'div');
    projectElem.addEventListener('click', () => {
      loadTaskInformation(task);
    });
  });
}