// Armazena uma função em uma variavel
const ImprimirSoma = function (a,b) {
    console.log(a + b)
}

ImprimirSoma(2,5)

//Armazena uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(15,5))

// retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(15,5))

// reduzindo ainda mais uma arrow function
const imprimir2 = a => console.log(a)
imprimir2('Funciona!!!')