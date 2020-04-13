/* eslint-disable no-console */

import Task from '../logic/task';

const task = new Task(3, 'Cocinar', 'Hacer rica comida', '2020/03/11', 'low', false);

console.log(task);
task.edit({ description: 'El arte de alimentar', done: true });
console.log(task);