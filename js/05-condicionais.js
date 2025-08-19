'use strict';

/* Comandos condicionais mais comuns:
if      -> SE
else    -> SENÃO
*/

console.log("Exemplo 1");

let numero = 50;

// Condicional SIMPLES (usa apenas if)
if(numero >= 10){
    console.log("SE você está vendo essa mensagem é porque a condição é verdadeira");
}

console.log("\nExemplo 2\n");

let aluno = "Ozzy";
let idade = 30;

/* Lógica: Verificar se o aluno é maior ou menor de idade */

// Condicional COMPOSTA (usa o if e else)
if(idade < 18){
    console.log(`${aluno} é menor de idade.`);    
} else{
    console.log(`${aluno} é maior de idade!`);
}
