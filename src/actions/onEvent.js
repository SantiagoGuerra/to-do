export default function onEvent(element, event, callback) {
  element.addEventListener(event, () => {
    callback();
  });
}