console.log('Fazendo o pedido online...')

let promessaPedidoConfirmado = new Promise((resolve, reject) => {
    setTimeout(() =>{
        let sucesso = true;
        if(sucesso) {
            console.log('Pedido confirmado com sucesso!');
            resolve({confirmation: true, payment: 'WAITING'})
        }else{
            reject('Pedido não pode ser confirmado, tente novamente!');
        }
    }, 5000) //5s
});

let promessaPagamento = (pedido) => new Promise((resolve, reject) =>{
    console.log('Aguardando o pagamento ser confirmado...');

    setTimeout(() =>{
        let pagamentoAprovado = true;
        if(pagamentoAprovado){
            console.log('Pagamento aprovado com sucesso!');
            resolve({confirmation: true, payment: 'APPROVED'});
        }else{
            reject('Pagamento não foi confirmado! E o pedido foi cancelado!');
        }
    }, 5000);
});
const promessaResolvida = promessaPedidoConfirmado
    .then((pedido) =>{
        console.log(pedido)
        return promessaPagamento(pedido)
    })
    .then((pagamento) =>{
        console.log({pagamento});
        console.log('Sucesso ao realizar o pagamento! Aguardando envio do pedido!')
    })

