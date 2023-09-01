'use strict'

const botãoEncurtar = document.getElementById('button');
document.getElementById('input-url')

const encurtar = async() => {
  let urlEncurtar = document.getElementById('input-url').value;
  if (!urlEncurtar) {
      alert("É preciso inserir uma URL para encurtar");
      return;  
  }
  let headers = {
  "Content-Type": "application/json"
  }
  let result = await lib.url.temporary['@0.3.0'].create({
    url: urlEncurtar // required
  });

}

botãoEncurtar.addEventListener('click', encurtar)