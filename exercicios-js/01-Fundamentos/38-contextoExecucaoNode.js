// dentro do node, cada arquivo é um módulo
// usando let, ela tem escopo local, não é exportada
let a = 3

// da forma abaixo, está sendo criado uma variavel maluca, com escopo global
aaab = 123 //não fazer isso

// global, equivalente ao window no browser
global.b = 123

// vai exportar essas variaveis para fora desse arquivo
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(b)
console.log(global.b)
console.log(global.c)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this) // this e exatamente igual ao module.exports

// duas notações para mesma coisa
console.log(module.exports)
//comumente visualizado e usado assim
module.exports = { c: 456, d: false, e: 'teste' }
console.log(aaab)