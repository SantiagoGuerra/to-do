export default function TaskInformation(title, description) {
  return `
    <div class='task-information'>
      <h2>
        ${title}
      </h2>
      <p>
        ${description}
      </p>
    </div>      
  `;
}
