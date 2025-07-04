const dbUsuarios = [
    {id: 1, nome: 'Pedro'},
    {id: 2, nome: 'Vitoria'},
    {id: 3, nome: 'Theo'},
    {id: 4, nome: 'Aurora'},
    {id: 5, nome: 'Filipo'},
    {id: 6, nome: 'Lilian'},
    {id: 7, nome: 'Anderson'},
    {id: 8, nome: 'Laura'},
    {id: 9, nome: 'Cleiton'},
    {id: 10, nome: 'Roger'},
];

function buscaMutiplosIds(id){
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                const usuarioEncontrado = dbUsuarios.find((idUsuario) => idUsuario.id === id);
                if(usuarioEncontrado != undefined){
                    console.log('Usuário encontrado!');
                    resolve(usuarioEncontrado)
                }else{
                    reject(`${id} não existe no banco de dados!`)
                }
        }, 0);
    });
};

async function buscarUsuariosPorLote(arrayIDs){
    for(const id of arrayIDs) {
        try{
            const encontrarUsuarios = await buscaMutiplosIds(id)
            console.log(`O usuário ${encontrarUsuarios.nome} foi encontrado! O ID é ${encontrarUsuarios.id}`)
        }catch(error){
            console.log(error)
        };
    };
};
buscarUsuariosPorLote([1,2,54,7,3,9,10,57])
