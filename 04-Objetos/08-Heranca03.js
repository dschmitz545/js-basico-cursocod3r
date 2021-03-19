const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) //criou um objeto novo, tendo como protótipo o objeto pai
console.log(filha1.corCabelo)
console.log(filha1.nome)
filha1.nome = 'Ana'
console.log(filha1.nome) //sobrescreveu

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: true
    },
    endereco: {
        value: 'Rua ABC',
        writable: true,
        enumerable: true
    }
})
console.log(filha2.nome)
console.log(filha2.endereco)

filha2.nome = 'Carla'
filha2.endereco = 'Avenida XV'
console.log(filha2.nome)
console.log(filha2.endereco)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    console.log(key)
}

//sabendo se um atributo é do próprio objeto ou veio por herança
for( let key in filha2){
    filha2.hasOwnProperty(key) ? //testa apenas os atributos do próprio objeto(descarta os objetos da herança)
        console.log(`Do proprio objeto: ${key}`) : console.log(`Veio por herança: ${key}`)
}