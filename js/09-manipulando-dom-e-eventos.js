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

    // Adiciona a classe destaque (não coloque ponto neste caso)
    mensagem01.classList.add("destaque")
});

// Ao clicar 2x, retira o texto do paragrafo de mensagem
mensagem01.addEventListener("dblclick", function(){
    mensagem01.textContent = "";

    // Remove a classe destaque
    mensagem01.classList.remove("destaque")
});

/* Exercícios
mouseover!!!!
1) Crie uma constante nova e selecione o h1 da sua página

2) Crie um evento em que, ao passar o mouse em cima do h1, o texto mude para "Praticando Eventos!" e faça o texto ficar centralizado.

3) Faça também um evento de clique para que, quando clicar na palavra "Referências", o texto do h1 volte para a palavra "Eventos" e o alinhamento volte a ficar á esquerda (padrão). */

const titulo_principal = document.querySelector("#titulo_principal")

titulo_principal.addEventListener("mouseover", function(){
    titulo_principal.textContent = "Praticando Eventos!";

    titulo_principal.classList.add("titulo_principal");
});


const referencias = document.querySelector("#referencias");

referencias.addEventListener("click", function(){
    titulo_principal.textContent = "Eventos";

    titulo_principal.classList.remove("titulo_principal");
});

/* Exemplo 3: modo noturno */

const botaoModoNoturno = document.querySelector("#noturno")

botaoModoNoturno.addEventListener("click", function(){
    /* Usamos o toggle para alternar entre adicionar a classe OU remover a classe, de acordo com cada clique no botão */
    pagina.classList.toggle("modo-noturno")

    if ("modo noturno" == pagina.textContent) {
        botaoModoNoturno.textContent("Desativar")
    } else {
        botaoModoNoturno.textContent("Ativar")
    }
    
    

    /* DESAFIOS! 
    1) Faça a mudança de cores acontecer gradualmente (use o transition)
    2) Se o modo noturno estiver ativado, ou seja, se a classe modo-noturno estiver aplicada á pagina, faça o texto do botão mudar para "Desativar". Caso contrário, faça o texto do botão exibir "Ativar". 
    */
})


