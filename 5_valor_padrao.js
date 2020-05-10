function soma(a, b) {
    return a + b;
}

console.log(soma(1)); //NaN
console.log(soma()); //NaN

//VALOR PADRAO

function soma2(a = 3, b = 6) {
    return a + b;
}

console.log(soma2(1)); //7
console.log(soma2()); //9

//ARROW FUNCTION

const soma3 = (a = 3, b= 6) => a + b;

console.log(soma3(1));
console.log(soma3());