var entrada = require('readline-sync');

var salario_bruto = parseFloat(entrada.question('Digite seu salario bruto: '));
var inss = salario_bruto * 0.12;
var fgts = salario_bruto * 0.08;
var salario_liquido = salario_bruto - inss;

console.log('O salario líquido é: ',salario_liquido, 'reais');
console.log('Seu inss é de: ', inss, 'reais');
console.log('Seu fgts é: ', fgts, 'reais');