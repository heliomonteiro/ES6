import somaFunction from './funcoes_default'; // importando funcoes default - Função default permite ser chamada por alias
import soma, {sub} from './funcoes_default_e_normal'; // importando funcoes e funcoes default misturadas 
//import soma, {sub as subtracao} from './funcoes_default_e_normal'; // funcao pode ser renomeada assim 
import * as funcoes from './funcoes';

console.log('funcao default');
console.log(somaFunction(3, 2));

console.log('funcao normal e default');
console.log(soma(3, 2));
console.log(sub(3, 2));

console.log('funcoes importadas de uma vez');
console.log(funcoes.soma(3,2));