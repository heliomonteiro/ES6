// REST

const usuario = {
    nome: 'Helio',
    idade: 31,
    empresa: 'Click'
};

const { nome, ...resto} = usuario;

console.log(nome);
console.log(resto);