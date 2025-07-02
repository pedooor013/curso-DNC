async function main() {
    console.log('Fazendo o pedido online...')

    let promessaPedidoConfirmado = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            let sucesso = true;
            if (sucesso) {
                console.log('Pedido confirmado com sucesso!');
                resolve({confirmation: true, payment: 'WAITING'})
            } else {
                reject('Pedido não pode ser confirmado, tente novamente!');
            }
        }, 5000) //5s
    });
    let promessaPagamento = (pedido) => new Promise((resolve, reject) => {
        console.log('Aguardando o pagamento ser confirmado...');
        setTimeout(() => {

            let pagamentoAprovado = true;

            if (pagamentoAprovado) {
                console.log('Pagamento aprovado com sucesso!');
                resolve({confirmation: true, payment: 'APPROVED'});
            } else {
                //O reject funciona como se fosse o error do codigo
                reject('Pagamento não foi confirmado! E o pedido foi cancelado!');
            }
        }, 5000);
    });
    try{
    const resultadoPedido = await promessaPedidoConfirmado();
    const resultadoPagamento = await promessaPagamento();
    console.log('Tudo deu certo no seu pedido!')
    }catch(error){
        console.log(error)
    }

}
main();