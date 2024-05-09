
var entrada = require('readline-sync');

var lado = parseInt(entrada.question('Digite o valor de um lado de um quadrado: '));
var area = lado * lado;

console.log('Sua area em metros quadrado é: ', area, 'metros quadrado');