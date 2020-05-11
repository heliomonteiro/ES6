// TEMPLATE LITERALS

const nome = "Hélio";
const idade = 31;

//const usuario = {
//    nome: nome,
//    idade: idade,
//    empresa: 'Click',
//};

//Quando nome da propriedade = nome da variavel, pode deixar apenas um deles
const usuario = {
    nome,
    idade,
    empresa: 'Click'
}

console.log(usuario);