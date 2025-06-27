console.log('Fazendo o pedido online...')

let promessaPedidoConfirmado = () => new Promise((resolve, reject) => {
    setTimeout(() =>{
        let sucesso = true;
        if(sucesso) {
            console.log('Pedido confirmado com sucesso!');
            resolve({confirmation: true, payment: 'WAITING'})
        }else{
            reject('Pedido não pode ser confirmado, tente novamente!');
        }
    }, 1000) //5s
});

let promessaPagamento = () => (pedido) => new Promise((resolve, reject) =>{
    console.log('Aguardando o pagamento ser confirmado...');
    setTimeout(() =>{
        let pagamentoAprovado = false;
        /*
        if(pagamentoAprovado){
            console.log('Pagamento aprovado com sucesso!');
            resolve({confirmation: true, payment: 'APPROVED'});
        }else{
            reject('Pagamento não foi confirmado! E o pedido foi cancelado!');
        }*/
    }, 1000);
});

const promessaResolvida = promessaPedidoConfirmado()
    //Caso não de erro no pedido
    .then((pedido) =>{
        console.log(pedido)
        return promessaPagamento(pedido)
    })
    //Erro no pedido
    .catch((error) =>{
        console.log('Ocorreu um erro no nosso sistema! Refaça o pedido!')
    })
    //Pagamento sem erro
    .then((pagamento) =>{
        console.log({pagamento});
        console.log('Sucesso ao realizar o pagamento! Aguardando envio do pedido!')
    })
    //Erro no pagamento
    .catch((error) =>{
        console.log('O pagamento não foi confirmado, e o pedido cancelado!')
    })

//ARRUMAR O CÓDIGO NA PARTE DO PAGAMENTO, NAO ESTÁ INDO PARA O IF ELSE

