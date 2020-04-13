import Project from '../logic/project';
import Task from '../logic/task';

const task = new Task('Cocinar', 'Hacer rica comida', '2020/03/11', 'low', false);
const task2 = new Task('Limpiar', 'Lustrar todo como corresponde', '2020/03/12', 'high', false);

const project = new Project('Construccion de Casa');
console.log('Project without tasks');
console.log(project.length);
console.log(project);


project.addTask(task);
console.log('Project with one task');
console.log(project.length);
console.log(project);

project.addTask(task2);
console.log('Project with two tasks');
console.log(project.length);
console.log(project);

project.deleteTask(task.id);
console.log('Delete first task. Project should have one task');
console.log(project.length);
console.log(project);

project.deleteTask(task2.id);
console.log('Delete second task. Project should have zero tasks');
console.log(project.length);
console.log(project);