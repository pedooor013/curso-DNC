/* Uma promisse é literalmente uma promessa, que enquanto o código roda fazendo outra tarefa
ela estará em espera e pode ter alguns status: Pending (Pendente), Fulfild (Concluída), Reject (Rejeitada)
 */

let promise = new Promise((resolve, reject) => {
    //operação assincrona
    let sucesso = false; //Simula o sucesso
    if (sucesso) {
        resolve('Operação bem-sucedida!')
    }else{
        reject('Operação mal sucedida!')
    }
});

console.log(promise)