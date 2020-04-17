export default function TaskInformation(task) {
  return `
    <form id="edit-task-form" class='task-information'>                 

      <label for="task-title">
        Task Name:
      </label>
      <input id="task-title" class="edit-input edit-input-title" value="${task.title}"/> 

      <label for="task-duedate">
        Due Date:
      </label>
      <input id="task-duedate" type="date" class="edit-input edit-input-date" value="${task.dueDate}"/>

      <label for="task-priority">
        Priority:
      </label>
      <select id="task-priority" class="edit-input edit-input-select">
          <option value="low" ${task.priority === 'low' ? 'selected' : ''}>Low</option>
          <option value="medium" ${task.priority === 'medium' ? 'selected' : ''}>Medium</option>
          <option value="high" ${task.priority === 'high' ? 'selected' : ''}>High</option>
      </select> <br>


      <label for="task-description">
        Description:
      </label>

      <textarea id="task-description" class="edit-input edit-input-description" draggable="false">${task.description} </textarea> <br>


      

      <button id="send-form-button" class="edit-input edit-input-submit" type="submit">Edit</button>
    </form> 
  `;
}
