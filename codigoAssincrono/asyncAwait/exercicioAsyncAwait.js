const usuarios = [
    { id: 1, nome: "Alice" },
    { id: 2, nome: "Bob" },
    { id: 3, nome: "Carol" },
];

function buscarUsuarioPorId(array, id) {
    // Retorne uma Promise que simula uma consulta demorada ao banco de dados
    let buscaUsuario = () => new Promise((resolve, reject) => {
        let usuarioEncontrado = usuarios.some(idUsuario => idUsuario.id === id)
        console.log('Buscando dados no banco de dados');
        setTimeout(() => {
            if (usuarioEncontrado) {
                console.log(`O usuário foi encontrado! O nome dele é ${usuarios.id.nome}`)
                resolve(usuarios.id.nome)
            } else {
                reject(`No banco de dados não existe um usuário com o ID ${id}!`)
            }
        }, 1); // 5s
    })
}
async function exibirUsuario(id){
    try{
        const resultadoBusca = await buscarUsuarioPorId(id);
    }catch(error){
        console.log(error)
        console.log('Deu erro')
    }
}

// Teste os dois casos:
exibirUsuario(2); // Deve mostrar os dados do Bob
exibirUsuario(5); // Deve mostrar erro: Usuário não encontrado
