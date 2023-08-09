const numero = 10;

console.log(numero > 20); //false
console.log(numero == 10); //true

console.log(10 == '10'); //true
console.log(10 === '10'); //false

// == compara o conteúdo 
// === compara os tipos

console.log(10 != '10'); //false
console.log(10 != '10'); //false
console.log(10 !== '10'); //true

let minhaIdade = 26;
let tenhoCNH = true; 

const possoDirigir = minhaIdade >= 18 && tenhoCNH === true
console.log("Posso dirigir?", possoDirigir)

idade = 40;
const votoFacultativo = idade < 18 || idade >= 70

const aprendendo = true;
console.log(!aprendendo)

