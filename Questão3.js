var entrada = require('readline-sync');

var num = parseInt(entrada.question('Digite um numero'));
var num2 = parseInt(entrada.question('Digite outro numero'));

console.log('À soma de dois numeros é: ',(num+num2));