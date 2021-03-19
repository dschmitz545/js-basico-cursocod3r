// par nome/valor
const saudacao = 'Ola' //contexto léxico 1

function exec() {
    const saudacao = 'Ola 2' //contexto lexico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: '32',
    peso: '90',
    endereco: {
        logradouro: 'Rua XV novembro',
        numero: 125
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)