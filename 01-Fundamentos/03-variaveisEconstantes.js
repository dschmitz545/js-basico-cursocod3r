// duas formar de declarar variaveis
var a = 3
let b = 2
// var permite redeclarar a variavel
var a = 30
/*com let, não é permite redeclaração de variavel
let b = 40 //erro no js
*/
b = 40
console.log(a, b)

a = 300
b = 400
console.log(a, b)

/* quando não houver 
* motivos para 
* mudar o valor de uma variavel
* utilizar const
*/
const c = 600
console.log(a, b, c)