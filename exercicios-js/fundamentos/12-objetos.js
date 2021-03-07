const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 365
prod1['Desconto legal'] = 0.40 //evitar tributos com espaço

console.log(prod1)
console.log(prod1.nome)
console.log(prod1.preco)
console.log(prod1["Desconto legal"])

// não é a mesma coisa que JSON
const prod2 = {
    nome: 'camisa',
    preco: 80.56,
    obj3: {
        outro: 1,
        maisum: 'dentro de outro objeto'
    }
}
console.log(prod2)
console.log(prod2.obj3.maisum)

/*isso é um JSON
{"nome":"Camisa Polo", "preco": "39.90"}
*/