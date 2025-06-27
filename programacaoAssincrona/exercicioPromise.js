/* Buscando dados no servidor */

console.log('Preciso de um novo teclado!');

let consultaServidor = new Promise((resolve, reject) =>{
    console.log('Atendente: Um segundo, estamos vendo no estoque!');
    setTimeout(()=>{
        let sucesso = false;
        if (sucesso) resolve('Atendente: Encontramos esses modelos no estoque!\nEu: Vamos dar uma olhada!');
        else reject('Atendente: Infelizmente acabou no nosso estoque os teclados!\nEu: Ah, tudo bem! Obrigado!')
    }, 5000) // 5s
});
console.log('Eu: Ok, vou dar um olhada na loja enquanto isso!');

consultaServidor
    .then((mensagem) => console.log(mensagem))
    .catch((erro) => console.log(erro));