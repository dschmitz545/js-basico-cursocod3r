/* recurso novo do ecma 2015(ES6)
* exemplo com array
* cuidado: garantir que o dado esteja realmente aninhado
* se não, irá dar erro
*/
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 20]))
console.log(rand([500]))
console.log(rand([,27]))
// console.log(rand()) //erro
