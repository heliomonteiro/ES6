//1 - Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
//extender uma segunda classe chamada "Usuario".

//A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
//em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
//repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
//true na classe.

//Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
//retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.

console.log('ex1');
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }

}

class Admin extends Usuario {
    constructor() {
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

// 2 - A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
console.log('ex2');
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

// 2.1 - Utilizando o Map
// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
console.log('ex 2.1');
const newMap = usuarios.map(item => item.idade);
console.log(newMap)

// 2.2 - Utilizando o filter
// Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
// anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
console.log('ex 2.2');
const newFilter = usuarios.filter(function(usuario) {
    return usuario.idade > 18;
});

console.log(newFilter);

// 2.3 - Utilizando o find
// Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
console.log('ex 2.3');
const newFind = usuarios.find(function(item) {
    return item.empresa == 'Google';
});

console.log(newFind);

//2.4 - Unindo as operacoes
// Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos:

// Resultado:
//[
//    { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
//    { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
//]
   
console.log('ex 2.4');

const newMap2 = usuarios.map(function(usuario) {
    usuario.idade*=2;
    return usuario;
});

console.log(newMap2);
const newFilter2 = newMap2.filter(function(usuario) {
    return usuario.idade <= 50;
});

console.log(newFilter2);

// 3 - Converta as funções nos seguintes trechos de código em Arrow Functions:

// 3.1
//const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
// return item + 10;
//});

console.log('ex 3.1');

const arrF = [1, 2, 3, 4, 5];
console.log(arrF.map(item => item + 10));

// 3.2
// Dica: Utilize uma constante pra function
//const usuario = { nome: 'Diego', idade: 23 };
//function mostraIdade(usuario) {
// return usuario.idade;
//}
//mostraIdade(usuario);

console.log('ex 3.2');

const usuario = { nome: 'Diego', idade: 23 };
const usuario2 = { nome: 'Helio', idade: 31 };

mostraIdade = (usuario) => {usuario.idade};

// 3.3
// Dica: Utilize uma constante pra function
//const nome = "Diego";
//const idade = 23;
//function mostraUsuario(nome = 'Diego', idade = 18) {
// return { nome, idade };
//}
//mostraUsuario(nome, idade);
//mostraUsuario(nome);

console.log('ex 3.3');

const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);


// 3.4
console.log('ex 3.4');
//const promise = function() {
// return new Promise(function(resolve, reject) {
//    return resolve();
//})
//}

const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
    })
}