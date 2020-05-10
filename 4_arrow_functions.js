const arr = [1, 3, 4, 5, 6];

// NORMAL COM FUNÇÃO ANONIMA (function sem nome)
const newArr = arr.map(function(item) {
    return item * 2;
});

console.log(newArr);

// function(item)
// =
// (item) =>
// somente se for função anonima.
const newArr2 = arr.map((item) => {
    return item * 2;
});

console.log(newArr2);

// (item)
// =
// item
// se houver um único parametro.
const newArr3 = arr.map(item => {
    return item * 2
});

console.log(newArr3);

// { return item * 2}
// =
// item * 2
// se houver única linha de instrução.
const newArr4 = arr.map(item => item * 2);

console.log(newArr4);


// -- constante


// constante reduzida - não recomendado
const teste = () => {
    return 'teste';
}
console.log(teste);


// para numero, string ou array ok
const teste2 = () => [1,2,3];
console.log(teste2);

// para objeto a chaves também é utilizada pro corpo do objeto
const teste3 = () => ({nome: 'Helio'});
console.log(teste3);