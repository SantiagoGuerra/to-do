export function appendHTML(query, html, id) {
  const element = document.querySelector(query);
  element.id = id;
  element.innerHTML = html;
  return element;
}

function createElement(elementType) {
  return document.createElement(elementType);
}

export function appendChild(query, htmlString, id, elementType) {
  const elem = createElement(elementType);
  elem.id = id;
  elem.innerHTML = htmlString;
  const content = document.querySelector(query);
  content.appendChild(elem);
  return elem;
}

export function appendChildToMain(htmlString, id) {
  appendChild('#content', htmlString, id, 'div');
  return true;
}


// function renderContent(htmlString, id) {
//   while (main.firstChild) {
//     main.removeChild(main.lastChild);
//   }
//   const elem = document.createElement('div');
//   elem.id = id;
//   elem.innerHTML = htmlString;
//   main.appendChild(elem);
// }