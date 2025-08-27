'use strict';

/* Exemplo 01 */

// Procurando (querySelector) por um elemento chamado exemplo1
const exemplo01 = document.querySelector("#exemplo01");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");

console.log(exemplo01);
console.log(mensagem01);
console.log(pagina);

// Exemplo detectando eventos
// Ao clicar 1x, adiciona um texto ao paragrafo de mensagem
exemplo01.addEventListener("click", function(){
    mensagem01.textContent = "Evento aqui!"

    // Adiciona a classe destaque
    mensagem01.classList.add("destaque")
});

// Ao clicar 2x, retira o texto do paragrafo de mensagem
mensagem01.addEventListener("dblclick", function(){
    mensagem01.textContent = "";

    // Remove a classe destaque
    mensagem01.classList.remove("destaque")
});