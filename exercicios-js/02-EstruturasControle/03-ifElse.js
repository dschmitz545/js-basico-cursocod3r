const ImprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}
/*
const ImprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else ; { //Cuidado, aqui agora,sempre será impresso o reprovado
        console.log('Reprovado')
    }
}
*/

/* mesma if acima, so que sem as {
const ImprimirResultado = function(nota) {
    if(nota >= 7) 
        console.log('Aprovado')
    else  
        console.log('Reprovado')
    
}
*/
ImprimirResultado(5)
ImprimirResultado(7)
ImprimirResultado(9)
ImprimirResultado(4)
ImprimirResultado(10)
ImprimirResultado('Epa') //cuidado