'use strict';

// Declarar uma array (vetor)
let vocalistas = ["Ozzy", "Dio", "Lemmy", "David Gilmour"];

// Se quisermos visualizar a estrutura do array inteiro:
// console.log(vocalistas);

// Acessando um determinado elemento através do índice 
console.log(vocalistas[0]);

// O David Gilmour está em turnê tocando Pink Floyd
console.log(`O ${vocalistas[3]} está em turnê tocando Pink Floyd`);


// Relembrando como criar/usar arrays (vetor)
// No JS, você pode colocar qualquer coisa em um array
let seila = 6
const coisas = [10, "Senac", "<h2>Oie</h2>", seila, 15.88];
console.log(coisas[1]);
console.log(coisas[4]);

/* Exercícios (FAÇA AQUI MESMO  ) */

// 1) Crie um array contendo o nome de 7 coisas que você gosta (exemplos: artistas, musicas, livros, comidas... sei lá, inventa!)

// 2) Em seguida, mostre no console uma frase personalizada indicando o segundo, o quinto e o sétimo elemento do array. Use concatenação e/ou template string.

const coisas_que_gosto = ["videogame", "Bistecone", "Música 'Blue', do Young Kai", "skate", "futebol", "dormir", "Fifa"];

console.log(`Normalmente curto assistir Lives do streamer ${coisas_que_gosto[1]} nas noites, porém, quando tem algum jogo de ${coisas_que_gosto[4]} passando no mesmo horário, aí não tem jeito, tenho que assistir... falando nisso, de vez em quando támbem gosto de passar uma raivinha jogando um ${coisas_que_gosto[6]} (kkkk)`);

/* Array como MATRIZ DE 2 DIMENSÕES */
const tecnologias = [
    ["HTML", "CSS", "JAVASCRIPT"],
    ["Figma", "Photoshop"],
    ["PHP", "Node.js", "SQL", "Express"]
];

// 
console.log(tecnologias[0][2]); // JAVASCRIPT
console.log(tecnologias[1][0]); // Figma
console.log(tecnologias[2][3]); //Express



