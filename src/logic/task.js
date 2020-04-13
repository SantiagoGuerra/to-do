import { v1 as uuidv1 } from 'uuid';

export default class Task {
  constructor(title, description, dueDate, priority, done) {
    this.id = uuidv1();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.done = done;
  }

  edit(properties) {
    Object.keys(properties).forEach(property => {
      this[property] = properties[property];
    });
  }
}