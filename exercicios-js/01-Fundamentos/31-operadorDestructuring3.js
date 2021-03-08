/* recurso novo do ecma 2015(ES6)
* exemplo com objeto
* cuidado: garantir que o dado esteja realmente aninhado
* se não, irá dar erro
*/

// se não for passado paramento para
// min e max, ele ira assumir
// os valores padrao 0 e 1000
function rand( {min = 0, max = 1000 } ) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
//console.log(rand({max: 50, min: 40})) // mesma notação acima

console.log(rand({ min: 200 }))
console.log(rand({}))
//console.log(rand()) //erro, pois não está usando o destruturing