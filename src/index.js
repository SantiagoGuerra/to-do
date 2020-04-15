import './styles/main.scss';
// import './testing/main';
import state from './state';
import loadProjectList from './actions/loadProjectList';

window.addEventListener('load', () => {
  loadProjectList(state.projectList.projects);
});