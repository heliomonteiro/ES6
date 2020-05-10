const arr = [1, 3, 4, 5, 8, 10];

// Cria novo array - parametros valor e index - 
const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr);

//
const sum = arr.reduce(function(total,next) {
    return total + next;
});

console.log(sum);

// Cria novo array - parametro valor - pela condição true
const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

//
const find = arr.find(function(item){
    return item === 2;
});

console.log(find);