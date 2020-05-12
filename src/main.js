const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK')}, 2000);
});

/* PROMISE NORMAL

minhaPromise().then(response => {
        console.log(response);

        minhaPromise().then(response => {
            console.log(response);

            minhaPromise().then(response => {
                console.log(response);
            })
        })
    })

ABAIXO PROMISSE UTILIZANDO ASYNC/AWAIT
*/

//async function executaPromise() {
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
//}

const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();