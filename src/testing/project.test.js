/* eslint-disable no-console */
import Project from '../logic/project';
import Task from '../logic/task';
import { notEqual } from './helpers';


console.log('----- Tests begin -----');
console.log('----------');
const project = new Project('Construccion de Casa');
console.log('Project without tasks');
console.log(`Number of tasks: ${project.tasks.length}`);
console.log('----------');


const task = new Task('Cocinar', 'Hacer rica comida', '2020/03/11', 'low', false);
project.addTask(task);
console.log('Project with one task');
console.log(`Number of tasks: ${project.tasks.length}`);
console.log('----------');


console.log('---Project with two tasks---');
const task2 = new Task('Limpiar', 'Lustrar todo como corresponde', '2020/03/12', 'high', false);
project.addTask(task2);
console.log(`Number of tasks: ${project.tasks.length}`);
console.log('----------');


console.log('---Delete first task. Project should have one task---');
project.deleteTask(task.id);
console.log(`Number of tasks: ${project.tasks.length}`);
console.log('---Delete second task. Project should have zero tasks---');
project.deleteTask(task2.id);
console.log(`Number of tasks: ${project.tasks.length}`);
console.log('----------');


console.log('---zzzzzzzzzzzEdit task test---');
const task3 = new Task('Cocinar 2', 'Hacer rica comida', '2020/03/11', 'low', false);
project.addTask(task3);
const expected = project;
// console.log(JSON.stringify(project.tasks));
const result = project.editTask(task3.id, { title: 'New name 1' });
// console.log(JSON.stringify(project.tasks));
notEqual(expected, result);
console.log('----------');


console.log('---Edit test---');
const task4 = new Task('Limpiar 2', 'Lustrar todo como corresponde', '2020/03/12', 'high', false);
project.addTask(task4);
console.log(JSON.stringify(project.tasks));
project.editTask(task4.id, { title: 'New namezzz' });
console.log(JSON.stringify(project.tasks));
console.log('----------');


console.log('---Changes name---');
console.dir(JSON.stringify(project));
project.changeName('New project name');
console.dir(JSON.stringify(project));
console.log('----------');