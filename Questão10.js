var entrada = require('readline-sync');

var raio = parseFloat(entrada.question('Digite o valor do raio: '));
var pi = 3.14;
var area_da_circunferencia = pi*(raio * raio);

console.log('A área da circunferencia é:' , area_da_circunferencia);