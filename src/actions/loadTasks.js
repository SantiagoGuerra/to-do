import {appendChild} from '../utils/append';
import loadTaskInformation from './loadTaskInformation';

export default function loadTasks(project) {
  project.forEach(task => {
   
    let projectElem = appendChild('#tasks', `<p>${task.title}</p>`, task.id, 'div');
    
    projectElem.addEventListener('click', e => {
      loadTaskInformation(task)
    })

  })
} 