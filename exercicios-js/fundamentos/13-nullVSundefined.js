let valor // nao inializada
console.log(valor) // retorna undefined

//não aponta para nenhum endereço de memória
//não tem nenhum valor primitivo
valor = null //ausencia de valor
console.log(valor)
// console.log(valor.toString()) //Erro

// quando quiser zerar uma referencia, ou um valor utilizar null
// não é recomendavel usar undefined
// deixa a linguagem definir undefined

const produto = {}
 // retorna undefined
 // pois o objeto produto foi criado e iniciado
 // mas não existe a propriedade preço
console.log(produto.preco)
//console.log(produto.preco.a) // Erro
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)

//para remover um atributo de um objeto
delete produto.preco
console.log(produto)

produto.preco = null // deixar sem preço
console.log(!!produto.preco) //false
console.log(produto)