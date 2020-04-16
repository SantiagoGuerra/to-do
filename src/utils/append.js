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
