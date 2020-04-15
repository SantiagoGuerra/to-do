import './styles/main.scss';
// import './testing/main';
import state from './state';
import onEvent from './actions/onEvent';
import loadProjectList from './actions/loadProjectList';


onEvent(window, 'load', loadProjectList(state.projectList.projects));