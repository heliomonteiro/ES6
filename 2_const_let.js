//ERRADO
//const nome = 'Helio';
//nome = 'Helio Monteiro';

//PODE
// pois não é atribuição, é mutação
//const usuario = {name: 'Helio'};
//usuario.name = 'Helio Monteiro';

//console.log(usuario);

function teste(x){
    let y = 2;

    if (x > 5) {
        let y = 4;

        console.log(x,y);
    }
    console.log(y);
}

//console.log(y);

teste(10);

//let permite usar variável com mesmo nome dentro de um escopo