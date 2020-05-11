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

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2];
console.log(arr3);


const usuario1 = {
    nome: 'Helio',
    idade: 31,
    empresa: 'Click'
};


const usuario2 = { ...usuario1, nome: 'Helio Monteiro'};

console.log(usuario2);

//Rest e Spread são muito utilizados em bibliotecas como VUE