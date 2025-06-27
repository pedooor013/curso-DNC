console.log('Eu: Preciso de um caderno novo!');

let promessaDeCompara = new Promise((resolve, reject) => {
    console.log('Amigo: Estou indo comprar o caderno')

    setTimeout(() => {
        let sucesso = false;
        if (sucesso) resolve('Amigo: Aqui está o seu caderno!')
        else reject('Amigo: A loja estava fechada quando eu cheguei!')
    },5000); //5s
})

console.log('Eu: Vou continuar enquanto voce compra o caderno!')
promessaDeCompara
    .then((mensagem) => console.log(mensagem))
    .catch((erro) => console.log(erro));