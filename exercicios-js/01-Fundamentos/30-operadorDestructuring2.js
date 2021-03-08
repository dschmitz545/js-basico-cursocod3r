// recurso novo do ecma 2015(ES6)
// exemplo com array
// cuidado: garantir que o dado esteja realmente aninhado
// se não, irá dar erro

// extraindo valor 10 do array
const [a] = [10]
console.log(a)

// extraindo valores do array
// se não existir, como o n5, retorna undefined
// e pode ser atribuido um valor default, caso
// não exista, como o n6
const [n1, , n3, , n5, n6 = 0] = [10, 78, 45, 9]
console.log(n1, n3, n5, n6)

/* extraindo valores de um array, dentro de outro array
* não é utilizado no dia a dia
* no exemplo, vai ignorar, o primeiro array
* vai para o segundo array, mas ignorando 
* o primeiro elemento(2) e buscando o valor 4
*/
const [, [, nota]] = [[,8, 1], [2, 4, 9]]
console.log(nota)