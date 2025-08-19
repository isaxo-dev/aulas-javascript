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

/* 
Exercício Condicional
 
1. Crie duas variáveis conforme a seguir:
 
- Nota 1 (contendo um valor de 0 a 10)
- Nota 2 (contendo outro valor de 0 a 10)
 
2. Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. 
DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.
 
3. Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". 
Caso contrário, mostre "reprovado".
*/

const nota1 = 8;
const nota2 = 8;
let media = (nota1 + nota2)/2

if (media >= 7) {
    console.log(`Parabéns, você foi aprovado! \nSua média foi ${media}`);
} else{
    console.log(`Você foi reprovado. \nSua média foi ${media}`);
}

console.log("\nExemplo 3\n");

// Condicional ENCADEADA/SUCESSIVA

/* Verificando o desempenho do aluno conforme a média:  
- Média acima de 9? Ótimo
- Média acima de 7? bom
- Média acima de 5? ruim
- Média até 5? péssimo
*/

if(media > 9){
    console.log("Ótimo!");
} else if(media > 7){
    console.log("Bom!");
} else if(media > 5){
    console.log("Ruim.");
} else {
    console.log("Péssimo.");
}
