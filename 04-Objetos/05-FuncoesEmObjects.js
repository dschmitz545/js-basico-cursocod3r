const pessoa = {
    nome: 'Andre',
    idade: '25',
    peso: '55'
}

console.log(Object.keys(pessoa)) //retorna todas as chaves do objeto pessoa
console.log(Object.values(pessoa)) //retorna os valores das chaves do objeto pessoa
console.log(Object.entries(pessoa)) //retorna registro tanto das chaves como valores(retorna um array, com todos os sub arrays)
//pode usar, por exemplo, para percorrer um array
Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]} : ${element[1]}`)
});

//o mesmo caso, mas utilizando destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
});

//definir propriedade de um objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false, //será listada com keys?
    writable: false, // será sobescrita? mesma utilidade do freeze
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/1990'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ecma 2015)
const destino = { a: 1}
const objeto1 = { b: 2}
const objeto2 = { c: 3, a: 4 }
const ObjResultante = Object.assign(destino, objeto1, objeto2) //vai concaternar o objeto1 e objeto2, dentro do objeto destino
console.log(ObjResultante) // o valor de a, será do objeto2 e não do objeto de destino(será sobescrito)

Object.freeze(ObjResultante) //nao deixa alterar nenhum valor dento do objeto
ObjResultante.c = 1234
console.log(ObjResultante)

//estabelecendo a relação de protótipo entre dois objetos
//Object.setPrototypeOf(ferrari, carro)