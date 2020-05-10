const usuario = {
    nome: 'Helio',
    idade: 31,
    endereco: {
        cidade: 'Araxá',
        estado: 'MG'
    },
};

//const nome = usuario.nome;
//const idade = usuario.idade;
//const cidade = usuario.endereco.cidade;

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);

//function mostraNome(usuario) {
//    console.log(usuario.nome);

//}

function mostraNome({usuario,idade,endereco: {cidade}}) {
    console.log(nome);
    console.log(idade);
    console.log(cidade);
}

mostraNome(usuario);