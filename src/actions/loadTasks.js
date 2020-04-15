import {appendChild} from '../utils/append';

export default function loadTasks(project) {
  project.forEach(task => {
   
    let projectElem = appendChild('#tasks', `<p>${task.title}</p>`, task.id, 'div');
    
    projectElem.addEventListener('click', e => {
      console.log(task.title)
    })

  })
} 