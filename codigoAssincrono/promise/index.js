 /* Código assincrono ele permite que possamos fazer mais uma coisa ao mesmo tempo
 * E o código sincrono é executado linha por linha, assim demorando muito mais tempo!
 * Esse tipo de código é muito usado para quando estamos buscando algo no servidor e podemos ir fazendo outra coisa enquanto a requisição ao servidor é atendida*/
console.log('Primeiro')
 setTimeout(() =>{
     console.log('Segundo')
 }, 5000)
 console.log('Terceiro')
