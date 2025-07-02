async function tratativaErros(){

let promise = async () => new Promise((resolve, reject) => {reject('Um erro aconteceu aqui')});

try{
    const resolvedPromise = await promise();
    console.log('Promise resolvida!')
    //Não ira retornar nada
}catch(error){
    console.log(error)
    //Retorna o erro lá de cima
}

}
tratativaErros()

