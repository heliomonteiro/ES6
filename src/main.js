//import somaFunction from './funcoes_default'; // importando funcoes default - Função default permite ser chamada por alias
//import soma, {sub} from './funcoes_default_e_normal'; // importando funcoes e funcoes default misturadas 
//import soma, {sub as subtracao} from './funcoes_default_e_normal'; // funcao pode ser renomeada assim 
//import * as funcoes from './funcoes';

//console.log('funcao default');
//console.log(somaFunction(3, 2));

//console.log('funcao normal e default');
//console.log(soma(3, 2));
//console.log(sub(3, 2));

//console.log('funcoes importadas de uma vez');
//console.log(funcoes.soma(3,2));

//alert("testando ok!!");

//Todos os exercícios abaixo necessitam que você esteja com o Webpack configurado.

/*1º exercício
Crie um arquivo chamado functions.js com o seguinte conteúdo:
export const idade = 23;
export default class Usuario {
 static info() {
 console.log('Apenas teste');
 }
}
console.log('ex 1.1');
Agora em seu arquivo principal import apenas a classe Usuario renomeando-a para ClasseUsuario
e chame a funão info();
*/

import ClasseUsuario from './functions';
ClasseUsuario.info();

console.log('ex 1.2');
//Em seu arquivo principal importe a variável de idade e exiba a mesma em tela;
import {idade} from './functions';
console.log(idade);


console.log('ex 1.3');
//Em seu arquivo principal importe tanto a classe quanto a variável idade e renomeie a variável idade
//para IdadeUsuario.
import ClasseUsuario2, {idade as Idadeusuario} from './functions';