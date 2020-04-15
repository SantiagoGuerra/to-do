import { appendChild } from '../utils/append';
import loadTask from './loadTasks';

export default function loadProjectList(projectList) {
  projectList.forEach(project => {
    // let projectID = document.querySelector('p')
    // console.log(projectID)
    let projectListElem = appendChild('#projectList', `<p>${project.name}</p>`, project.id, 'div');
    
    projectListElem.addEventListener('click', e => {
      console.log(project)
      loadTask(project.tasks)
    }) 

  })
}