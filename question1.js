function getElementById(id) {
    
  let elements = document.getElementsByTagName('*');

  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    if (element.hasAttribute('id') && element.getAttribute('id') === id) {
      return element;
    }
  }

  return null;
}
