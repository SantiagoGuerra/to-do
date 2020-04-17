import { v1 as uuidv1 } from 'uuid';

export default class Task {
  constructor(title,
    description = 'Task description',
    dueDate = 'no due date',
    priority = 'low',
    done = false) {
    this.id = `a${uuidv1()}`;
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