var entrada = require('readline-sync');

var nota1 = parseFloat(entrada.question('Digite a primeira nota'));
var nota2 = parseFloat(entrada.question('Digite a segunda nota'));
var nota3 = parseFloat(entrada.question('Digite a terceira nota'));
soma = (nota1 + nota2 + nota3)/2

console.log(`A sua media é:  `, (soma));