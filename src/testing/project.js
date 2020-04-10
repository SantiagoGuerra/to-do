import Project from '../logic/project';
import Task from '../logic/task';

const task  = new Task(3, 'Cocinar', 'Hacer rica comida', '2020/03/11', 'low', false);
const task2 = new Task(3, 'Limpiar', 'Lustrar todo como corresponde', '2020/03/12', 'high', false);

const project = new Project("Construccion de Casa");
console.log('Project without tasks');
console.log(project);


project.addTask(task);
console.log('Project with one task');
console.log(project);

project.addTask(task2);
console.log('Project with two tasks');
console.log(project);