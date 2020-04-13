
export default class Project {
  constructor(name) {
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
}