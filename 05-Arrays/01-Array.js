//array aqui em js é uma função
console.log(typeof Array, typeof new Array, typeof [])

//formas de iniciar um array
let aprovados = new Array('Bia', 'Joao', 'Douglas')
console.log(aprovados)

let reprovados = ['Rafael', 'Jose', 'Antonio']
console.log(typeof aprovados, typeof reprovados)

//acessando array
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log(reprovados[0])
console.log(reprovados[1])
console.log(reprovados[2])
console.log(reprovados[3])
console.log(reprovados[4])

aprovados[3] = 'Amanda' //adicionando um elemento na posição 3 do array
console.log(aprovados)
aprovados.push('Leonardo') //adicionando um elemento na proxima posição do array
console.log(aprovados)
console.log(aprovados.length) //retorna tamanho do array
console.log(reprovados.length)
reprovados[7] = 'Souza'
console.log(reprovados.length)
console.log(reprovados)
console.log(reprovados[6] === null) //false
console.log(reprovados[6] === undefined) //true

reprovados.sort() //altera a sequencia do array
console.log(reprovados)

delete reprovados[3]
co
//splice
listadecompras = ['macarrao', 'arroz', 'feijao', 'sopa', 'pão', 'molho tomate']
console.log(listadecompras)
listadecompras.splice(1, 2)  //a partir do indice 1, vai excluir 2 elementos
console.log(listadecompras)
listadecompras.splice(1, 2, 'Caldo', 'Farinha')  //a partir do indice 1, vai excluir 2 elementos e adicionar dois novos
console.log(listadecompras)
listadecompras.splice(1, 0, 'Sabonete', 'Shampoo')  //a partir do indice 1, não vai excluir nenhum elemento e adicionar dois novos
console.log(listadecompras)

