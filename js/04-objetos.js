'use strict';

// Exemplo 1: objeto com dados de uma pessoa
console.log("Exemplo 1\n");

const pessoa = {
    // Propriedade: valor
    nome: "Chaves",
    idade: 8,
    cidade: "São Paulo",
    estado: "SP"
};  

console.log(pessoa);

// Acessamos as propriedades usando nomeDoObjeto.nomeDaPropriedade
console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos.`);

// Exemplo 2: objeto com array
console.log("\nExemplo 2\n");

const livro = {
    titulo: "Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volumes: [
        "A Sociedade do Anel",
        "As Duas Torres",
        "O Retorno do Rei"
    ]
};

console.log(livro);
console.log(livro.titulo);

/* Para acessar algum dos volumes, primeiro passamos pela propriedade (volumes) usando 'ponto' e, chegando nela, usamos os 'colchetes' com índice pois se trata de um array. */
console.log(`Meu livro preferido é ${livro.volumes[1]}`);

// Exemplo 3: array de objetos
console.log("\nExemplo 3\n");
const livros = [
    {
        titulo: "O assassinato no Expresso do Oriente",
        autor: "Christie"
    },
    {
        titulo: "Crepúsculo",
        autor: "Stephanie Myers"
    },
    {
        titulo: "Um livro qualquer",
        autor: "Fulano de tal"
    }
];

console.log(livros);

console.log(livros[2].titulo);

/* Exercícios */

/* Exercícios

1. Crie um objeto chamado "aluno" contendo os seguintes dados:

- Nome Completo
- Data de Nascimento
- (Use ARRAY) Lista de telefones (fixo e celular)
- (DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente):
  - rua
  - número
  - bairro

2. Mostre no console o nome do aluno, o telefone celular e o bairro em que mora. */

const aluno = {
    nomeCompleto: "Isaac Rodrigues Simões",
    dataDeNascimento: "28/06/2009",
    listaDeTelefones: [
        "11-2233-4455",
        "(11)95203-9704"
    ],
    endereco: {
        rua: "Rua Tomás dos Reis",
        numero: "09",
        bairro: "Vila Barbosa"
    } 
}

console.log(`O nome do aluno é: ${aluno.nomeCompleto}. \nSeu telefone celular é: ${aluno.listaDeTelefones[1]} \nO bairro onde o aluno reside é: ${aluno.endereco.bairro}`);






