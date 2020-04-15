export default function TaskInformation(task) {
  // this.id
  // this.title
  // this.description
  // this.dueDate
  // this.priority
  // this.done
  return `
    <form class='task-information'>      
      
      <label>Title:</label><br>
      <input class="text-color-black" value="${task.title}"/> <br>

      <label>Description:</label><br>
      <textarea class="text-color-black">${task.description} </textarea> <br>

      <label>Due Date:</label><br>
      <input type="date" class="text-color-black" value="${task.dueDate}"/>  <br>
      
      <label>Priority:</label><br>
      <input class="text-color-black" value="${task.priority}"/>  <br>
      
      <label>Done:</label><br>
      <input type="checkbox" class="text-color-black" ${task.done ? 'checked' : ''}/>  <br>
      
      <button id="send-form-button" class="text-color-black" type="submit">Edit</button>
    </form> 
  `;
}
