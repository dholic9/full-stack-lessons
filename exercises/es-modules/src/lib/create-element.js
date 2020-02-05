<<<<<<< HEAD
const toArray = require('./to-array');

function createElement(tagName, attributes, children = []) {
  const parent = document.createElement(tagName);
  for (const name in attributes) {
    parent.setAttribute(name, attributes[name]);
  }
  toArray(children).forEach(child => {
    if (!(child instanceof HTMLElement)) {
      child = document.createTextNode(child);
    }
    parent.appendChild(child);
  });
  return parent;
}

module.exports = createElement;
=======
import toArray from './to-array';

export default function createElement(tagName, attributes, children = []) {
  const parent = document.createElement(tagName);
  for (const name in attributes) {
    parent.setAttribute(name, attributes[name]);
  }
  toArray(children).forEach(child => {
    if (!(child instanceof HTMLElement)) {
      child = document.createTextNode(child);
    }
    parent.appendChild(child);
  });
  return parent;
}
>>>>>>> 0e7d215a0128bab1b9046228c1b1f6dd4acd2fe2
