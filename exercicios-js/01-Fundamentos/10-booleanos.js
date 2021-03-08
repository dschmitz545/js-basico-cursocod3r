let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
console.log(!!false)
console.log(!!!false)

console.log('os verdadeiros ...')
console.log(!!3) //todos os inteiros com excessão do zero são verdadeiros
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos ...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar ...')
console.log(!!('' || null || 0 || ' '))

// se colocou nome, vai imprimir o nome, se não imprime desconhecido
let nome = ''
console.log(nome || 'desconhecido')
nome = 'ds'
console.log(nome || 'desconhecido')