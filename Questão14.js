var entrada = require('readline-sync');

var ano_de_nascimento = entrada.question('Qual seu ano de nascimento? ');
var ano_atual = entrada.question('Qual o ano atual? ');


console.log('Sua idade é: ',ano_atual - ano_de_nascimento);