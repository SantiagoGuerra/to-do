import './styles/main.scss';
// import './testing/main';
import state from './state';
import loadProjectList from './actions/loadProjectList';
import loadTasks from './actions/loadTasks';
import loadTaskInformation from './actions/loadTaskInformation';

window.addEventListener('load', () => {
  loadProjectList(state.projectList.projects);
  const project = state.projectList.projects[0];
  loadTasks(project);
  const task = project.tasks[0];
  loadTaskInformation(task, project.id);
});
