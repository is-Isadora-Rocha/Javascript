const input = require('readline-sync')
//import da biblioteca

const num_sort = 5;
let numero = Number(input.question('Qual numero voce escolhe?'))

while(numero !== num_sort){
    console.log('Voce errou... Tente novamente!')
    numero = Number(input.question('Qual numero voce escolhe?'))
}

console.log('Voce acertou!')