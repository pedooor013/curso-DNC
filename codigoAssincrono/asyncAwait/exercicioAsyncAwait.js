const usuarios = [
    { id: 1, nome: "Alice" },
    { id: 2, nome: "Bob" },
    { id: 3, nome: "Carol" },
];

function buscarUsuarioPorId(id) {
    // Retorne uma Promise que simula uma consulta demorada ao banco de dados
    return new Promise((resolve, reject) => {
        const usuarioEncontrado = usuarios.find((idUsuario) => idUsuario.id === id);
        setTimeout(() => {
            if (usuarioEncontrado !== undefined) {
                console.log(`O usuário foi encontrado!`)
                resolve(usuarioEncontrado)
            } else {
                reject(`No banco de dados não existe um usuário com o ID ${id}`)
            }
        }, 0); // 5s
    })
}
async function exibirUsuario(id){
    try{
        const resultadoBusca = await buscarUsuarioPorId(id);
        console.log(`O usuário ${resultadoBusca.nome} foi encontrado`)
    }catch(error){
        console.log(error)
    }
}

// Teste os dois casos:
exibirUsuario(2); // Deve mostrar os dados do Bob
exibirUsuario(5); // Deve mostrar erro: Usuário não encontrado
