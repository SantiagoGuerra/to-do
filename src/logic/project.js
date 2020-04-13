import { v1 as uuidv1 } from 'uuid';

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(task) {
    task.id = uuidv1();
    this.tasks.push(task);
  }
}