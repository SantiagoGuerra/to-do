import { v1 as uuidv1 } from 'uuid';

export default class Project {
  constructor(name) {
    this.id = `a${uuidv1()}`;
    this.name = name;
    this.tasks = [];
  }


  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(inputId) {
    this.tasks.forEach((task, i) => {
      if (task.id === inputId) {
        this.tasks.splice(i, 1);
        return 0;
      }
      return -1;
    });
  }

  editTask(id, properties) {
    this.tasks.forEach((task) => {
      if (task.id === id) {
        task.edit(properties);

        return 0;
      }

      return -1;
    });
  }

  changeName(newName) {
    this.name = newName;
  }

  findTask(inputId) {
    return this.tasks.filter((task) => task.id === inputId)[0];
  }
}