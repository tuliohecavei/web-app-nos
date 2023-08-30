'use strict'

const linkDigitado = document.getElementById('input-url');
const botaoEncurtar = document.getElementById('button');
const botaoVisualizar = document.getElementById('visualizarLinks');
const exibirLinks = document.getElementById('links');

botaoEncurtar.addEventListener('click', function(){
    localStorage.setItem('linkDigitado', linkDigitado.value);
})

botaoVisualizar.addEventListener('click', function(){
    exibirLinks.innerHTML = localStorage.getItem('linkDigitado')
})

