const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
// verifica se é do tipo inteiro
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.786
const avaliacao2 = 6.934

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
// Retornando apenas duas casas decimais
console.log(media.toFixed(2))

// retornando um valor numero para string
console.log(media.toString())
// retornando um valor numero para string em valor binário
console.log(media.toString(2))

// retorna number do tipo numerico
console.log(typeof(media))
// retorna number do tipo funcao
console.log(typeof(Number))