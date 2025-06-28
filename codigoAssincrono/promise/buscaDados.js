console.log('Buscar dados de um servidor!');

let count = 0;
let sucesso = false;

let promessaBusca = () => new Promise((resolve, reject) => {
    console.log('Buscando dados dentro do servidor...');

    setTimeout(()=>{
        if(count > 0) sucesso = true
        else count++
        if(sucesso) resolve({name: 'Fabio', age: 28})
        else reject('Aconteceu um erro no servidor! Dados não encontrado!')
    }, 5000) //5s
});
promessaBusca()
    .then(console.log)
    .catch((error) =>{
       // Executa o código novamente!
            console.log("Teste")
        promessaBusca()
            .then(console.log)
            .catch(console.log)
    })