var entrada = require('readline-sync');

var nome = entrada.question('Qual seu nome? ');
var sobre = entrada.question('Qual seu sobre? ');

console.log(`Seu nome é ${nome} ${sobre}`);