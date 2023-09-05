'use strict'

const botãoEncurtar = document.getElementById('button');
const input = document.getElementById('input-url');

const encurtar = () => {
  let urlEncurtar = input.value;

  if (!urlEncurtar) {
      alert("É preciso inserir uma URL para encurtar");
      return;  
  }

    console.log(urlEncurtar)
  
}

botãoEncurtar.addEventListener('click', encurtar)

