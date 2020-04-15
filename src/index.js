import './styles/main.scss';
// import './testing/main';
import seed from './data/seed';
import state from './state';
import {appendHTML, appendChildToMain, appendChild } from './utils/append';
import projectListTemplate from './templates/projectListTemplate.html';
import projectTemplate from './templates/projectTemplate.html';
import taskTemplate from './templates/taskTemplate.html';
import onEvent from './actions/onEvent';
import loadProjectList from './actions/loadProjectList';


onEvent(window, 'load', loadProjectList(state.projectList.projects));