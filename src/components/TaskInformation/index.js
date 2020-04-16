export default function TaskInformation(task) {
  // this.id
  // this.title
  // this.description
  // this.dueDate
  // this.priority
  // this.done
  return `
    <form id="edit-task-form" class='task-information'>                 

      <label>Title:</label><br>
      <input id="task-title" class="text-color-black" value="${task.title}"/> <br>

      <label>Description:</label><br>
      <textarea id="task-description" class="text-color-black">${task.description} </textarea> <br>

      <label>Due Date:</label><br>
      <input id="task-duedate" type="date" class="text-color-black" value="${task.dueDate}"/>  <br>
      
      <label>Priority:</label><br>
      <input id="task-priority" class="text-color-black" value="${task.priority}"/>  <br>
      
      <label>Done:</label><br>
      <input id="task-done" type="checkbox" class="text-color-black" ${task.done ? 'checked' : ''}/>  <br>
      
      <button id="send-form-button" class="text-color-black" type="submit">Edit</button>
    </form> 
  `;
}
