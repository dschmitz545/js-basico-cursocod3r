// recurso novo do ecma 2015(ES6)
// exemplo com objeto
// cuidado: garantir que o dado esteja realmente aninhado
// se não, irá dar erro

const pessoa = {
    nome: 'Ana',
    idade: '15',
    endereco: {
        rua: 'Rua flores',
        numero: 124,
        bancario: {
            banco: 'XYZ',
            agencia: 2547,
            conta: 2254,
            digito: 'A'
        }
    }
}

// extraindo dois atributos do objeto pessoa
const { nome, idade } = pessoa
console.log(nome, idade)

// extraindo dois atributos do objeto pessoa
// e renomeando os mesmo
const { nome: n, idade: i } = pessoa
console.log(i, n)

// extraindo um atributo que não existe
// dentro do objeto
const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

// extraindo atributos dentro de outros atributos
// do objeto pessoa
const { endereco: {rua, numero, cep = '89066-150'} } = pessoa
console.log(rua, numero, cep)

// extraindo atributos, dentro de outro atributo
// dentro de outro atributo, do objeto pessoa
const { endereco: { bancario: {banco, agencia, digito, saldo = 0} } } = pessoa
console.log(banco, agencia, digito, saldo)