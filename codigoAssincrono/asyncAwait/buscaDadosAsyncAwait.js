async function main(){
let buscarDadosServidor = async () => new Promise((resolve, reject) =>{
    console.log('Iniciando busca no servidor...');

    setTimeout(() =>{
        let sucesso = true;
        if(sucesso) resolve ({name: 'Fabio', age: 28});
        else reject('Opa, aconteceu um erro no servidor! Dados não encontrados')
    }, 5000)
});
    const data = await buscarDadosServidor();
    console.log(data);
}

main();