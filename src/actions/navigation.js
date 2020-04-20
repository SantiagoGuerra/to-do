export default function go(from, to) {
  const x = window.matchMedia('(max-width: 700px)');

  if (x.matches) {
    const taskContainer = document.querySelector(from);
    const taskEditor = document.querySelector(to);
    taskContainer.style.display = 'none';
    taskEditor.style.display = 'block';
  }
}