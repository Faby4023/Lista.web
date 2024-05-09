var entrada = require('readline-sync');

var largura = parseInt(entrada.question('Digite a largura do terreno'));
var comprimento = parseInt(entrada.question('Digite o comprimento do terreno'));
var area_do_terreno = (10 *20);
var area_construida = largura*comprimento
var area_restante = area_do_terreno - area_construida

console.log('A área restante do terreno é: ', area_do_terreno);