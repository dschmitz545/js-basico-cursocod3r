console.log(this === global) //falso, o this aponta para module.exports
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

//dentro de uma função o this não aponta para exports
function logThis() {
    console.log('Dentro de uma função, não aponta para o exports')
    console.log(this === exports)
    console.log("o this dentro de uma função aponta para o global")
    console.log(this === global)

    this.perigo = '...' // estou colocando em um escopo global
}

logThis()
console.log("e fora de uma função, aponta para o exports")
console.log(this === exports)

this.perigo = '...' // estou colocando dentro do module.exports