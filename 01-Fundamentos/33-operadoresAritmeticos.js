const [a, b, c, d] = [3, 47, 7, 15]

const soma = a + b + c + d
const subtracao = a - b - c - d
const multiplicacao = a * b
const divisao = d / a
const modulo = b % 2 

// a partir do ES7
const expo = 2 ** 3
const expo3 = 2 ** -3 //expoente negativo
let base = 7
base **= 3 // eleva o valor armazenado na base a terceira potência

// forma antiga
const expo2 = Math.pow(2, 3) // Primeiro base, depois expoente

console.log(soma, subtracao, multiplicacao, divisao, modulo, expo, expo2, expo3, base)
console.log(soma, subtracao, multiplicacao, -divisao, modulo, expo, expo2, expo3, base)