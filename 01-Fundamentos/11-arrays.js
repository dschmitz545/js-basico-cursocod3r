const valores = [7.7, 9.9, 1.2, 8,3]
console.log(valores)
console.log(valores[0], valores[5])
console.log(valores[9])

console.log(valores[12] = 121)
console.log(valores)
console.log(valores.length)

// conceito de pilha(FIFO)
// adicionando valores ao array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//removendo valores do array
console.log(valores.pop())
console.log(valores)
delete valores[0] //remove valor indice zero
console.log(valores)

console.log(typeof valores) // tipo object