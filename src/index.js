import './styles/main.scss';
// import './testing/main';
import seed from './data/seed';
import initializeState from './state';
import {appendHTML, appendChildToMain, appendChild } from './utils/append';
import projectListTemplate from './templates/projectListTemplate.html';
import projectTemplate from './templates/projectTemplate.html';
import taskTemplate from './templates/taskTemplate.html';
import onEvent from './actions/onEvent';
import loadProjectList from './actions/loadProjectList';

// <comment> Initialize
const state = initializeState();
// </comment>

// appendChildToMain(projectListTemplate, 'projectList');

// appendChild('#projectList', `<h1>${state.projectList.projects[0].name}</h1>`, state.projectList.projects[0].id, 'div');

// appendChild(`#${state.projectList.projects[0].id}`, `<h2>${state.projectList.projects[0].tasks[0].title}</h2>`, state.projectList.projects[0].tasks[0].id, 'div');
// appendChild(`#${state.projectList.projects[0].id}`, `<h2>${state.projectList.projects[0].tasks[1].title}</h2>`, state.projectList.projects[0].tasks[1].id, 'div');
// appendChild(`#${state.projectList.projects[0].id}`, `<h2>${state.projectList.projects[0].tasks[2].title}</h2>`, state.projectList.projects[0].tasks[2].id, 'div');

// appendChild('#projectList', `<h1>${state.projectList.projects[1].name}</h1>`, state.projectList.projects[1].id, 'div');

// appendChild(`#${state.projectList.projects[1].id}`, `<h2>${state.projectList.projects[1].tasks[0].title}</h2>`, state.projectList.projects[1].tasks[0].id, 'div');
// appendChild(`#${state.projectList.projects[1].id}`, `<h2>${state.projectList.projects[1].tasks[1].title}</h2>`, state.projectList.projects[1].tasks[1].id, 'div');
// appendChild(`#${state.projectList.projects[1].id}`, `<h2>${state.projectList.projects[1].tasks[2].title}</h2>`, state.projectList.projects[1].tasks[2].id, 'div');

// appendChild('#projectList', `<h1>${state.projectList.projects[2].name}</h1>`, state.projectList.projects[2].id, 'div');

// appendChild(`#${state.projectList.projects[2].id}`, `<h2>${state.projectList.projects[2].tasks[0].title}</h2>`, state.projectList.projects[2].tasks[0].id, 'div');
// appendChild(`#${state.projectList.projects[2].id}`, `<h2>${state.projectList.projects[2].tasks[1].title}</h2>`, state.projectList.projects[2].tasks[1].id, 'div');
// appendChild(`#${state.projectList.projects[2].id}`, `<h2>${state.projectList.projects[2].tasks[2].title}</h2>`, state.projectList.projects[2].tasks[2].id, 'div');


onEvent(window, 'load', loadProjectList(state.projectList.projects))
// console.log(state);

