//Object.preventExtensions  //nao deixa estenter(adicionar mais atributos), mas deixa excluir atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) //Testa para saber se é extensivel
produto.nome = 'Escova' // deixa alterar
console.log(produto)
produto.categoria = 'Básico' //não deixa adicionar um novo atributo
console.log(produto)
delete produto.tag //deixa excluir
console.log(produto)

//Object.seal //não deixa adicionar novos atributos e nem excluir os que já existem, apenas alterar
const pessoa = { nome: 'Julio', idade: 26}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
console.log(pessoa)
pessoa.nome = 'Andre'
console.log(pessoa)
pessoa.endereco = 'Rua ABC'
console.log(pessoa)
delete pessoa.idade
console.log(pessoa)
pessoa.idade = ''
console.log(pessoa)

//Object.freeze = selado + valor constante. Não consegue adicionar, remover ou modificar atributos
const carro = { marca: 'BMW', combustivel: 'gasolina', anoFab: 2020}
Object.freeze(carro)
console.log('Freeze:', Object.isFrozen(carro))
carro.marca = 'Volvo'
console.log(carro)
delete carro.anoFab
console.log(carro)
carro.modelo = 'X15'
console.log(carro)
carro.combustivel = ''
console.log(carro)
carro.marca = 'NADA'
console.log(carro)