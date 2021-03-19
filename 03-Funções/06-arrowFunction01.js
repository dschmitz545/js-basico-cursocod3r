//Introduzido a partir do ES2015
//função arrow, sempre é uma função anonima
//se quiser chamar ela depois, deve armazenar ela em uma variavél
//função normal
let dobro = function (a) {
    return 2 * a
}
// reescrevendo como função arrow
dobro = (a) => {
    return 2 * a
}
// função arrow, sem escrever o corpo dela
// se tiver apenas um unico parametro
// tem o retorno implicito
dobro = a => 2 * a
console.log(dobro(Math.PI))

// exemplo 2
// função normal
let ola = function () {
    return 'Olá'
}
//função arrow
ola = () => 'Olá'
ola = _ => 'Olá' //não significa ausência de parametro
console.log(ola())