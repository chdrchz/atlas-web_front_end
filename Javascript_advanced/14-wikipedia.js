function createElement(data) {
  
    // create elements and append text to p
    let paragraph = document.createElement('p');
    const node = document.createTextNode(data);
    paragraph.appendChild(node);
  
    // append p to document
    const element = document.getElementById('body');
    element.appendChild(paragraph);
  };
  
  function queryWikipedia(callback) {
    let xhttp = new XMLHttpRequest();
  
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById('body').innerHTML = xhttp.responseText;
    }
  
    xhttp.open(
      'GET',
      'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*',
      true
    );
  
    xhttp.send();
  
    xhttp.onload = () => {
      callback(xhttp.response);
    };
  };