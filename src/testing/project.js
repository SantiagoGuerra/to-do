import Project from '../logic/project';
import Task from '../logic/task';





// console.log("----------");
const project = new Project('Construccion de Casa');
// console.log('Project without tasks');
// console.log(project.tasks.length);
// console.log("----------");


// const task = new Task('Cocinar', 'Hacer rica comida', '2020/03/11', 'low', false);
// project.addTask(task);
// console.log('Project with one task');
// console.log(project.tasks);
// console.log("----------");


// const task2 = new Task('Limpiar', 'Lustrar todo como corresponde', '2020/03/12', 'high', false);
// project.addTask(task2);
// console.log('Project with two tasks');
// console.log(project.tasks[0].id);
// console.log(project.tasks);
// console.log("----------");

// project.deleteTask(task.id);
// console.log('Delete first task. Project should have one task');
// console.log(project);
// // console.log(project.getTasks())

// project.deleteTask(task2.id);
// console.log('Delete second task. Project should have zero tasks');
// console.log(project);
// // console.log(project.getTasks())
// console.log("----------");


console.log('Edit test');
const task3 = new Task('Cocinar 2', 'Hacer rica comida', '2020/03/11', 'low', false);
project.addTask(task3);
console.log(project.tasks)
project.editTask(task3.id, {title: 'New name 1'});
console.log(project.tasks)
console.log("----------");



console.log('Edit test');
const task4 = new Task('Limpiar 2', 'Lustrar todo como corresponde', '2020/03/12', 'high', false);
project.addTask(task4);
console.log(project.tasks)
// project.editTask(task4.id, {title: 'New name'});
console.log(project.tasks)
console.log("----------");

