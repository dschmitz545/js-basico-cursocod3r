// hoisting => 'jogar para cima'
console.log('a = ', a)
var a = 2
console.log('a = ', a)

/* isso é o que o javascript
* faz por baixo dos panos
var a //undefined
console.log('a = ', a)
a = 2
console.log('a = ', a)
*/

// com let isso já não funciona
/*
console.log('b = ', b)
let b = 5
console.log('b = ',b)
*/