// 1- expressão relacional (nota >= 7)
// 2 - se for veradeiro retorna primeiro parametro ('Aprovado')
// 3 - se for falso retorna segundo parametro ('Reprovado')

/*
const result = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
*/
const result = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(result(7.1))
console.log(result(8))
console.log(result(4))