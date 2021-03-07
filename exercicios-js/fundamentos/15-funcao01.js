//funcao sem retorno
function ImprimirSoma(a, b) { //se não passar o valor de b, vai retornar NaN
    console.log(a + b)

}
ImprimirSoma(2, 3)
ImprimirSoma(2)
ImprimirSoma(2, 3, 89, 4, 5)

// funcao com retorno
function soma(a, b = 1){ //se não passar o valor de b, asumirá o valor 1
    return a + b
}

console.log(soma(2,4))
console.log(soma(2))