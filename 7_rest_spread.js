// REST

// com objeto
const usuario = {
    nome: 'Helio',
    idade: 31,
    empresa: 'Click'
};

const { nome, ...resto} = usuario;

console.log(nome);
console.log(resto);


// com array
const arr = [1, 2, 3, 4];

const [a , b, ... c] = arr;

console.log(a);
console.log(b);
console.log(c);

// com function

function soma(a, b) {
    return a + b;
}

console.log(soma(1, 3));