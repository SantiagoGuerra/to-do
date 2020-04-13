export default class Task {
  constructor(id, title, description, dueDate, priority, done) {
    this.id = id;
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