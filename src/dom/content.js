// grabs the div with content id and fill it with content
import grab from './selector';

const anchor = document.getElementById('content');
console.log(anchor);
export default function render() {
  const elem = document.createElement('div');
  elem.innerHTML = 'Helloworld';
  anchor.appendChild(elem);
}