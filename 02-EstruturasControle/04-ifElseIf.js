const horaAgora = function (param) {
    if (param > 1 && param <= 5){
        console.log('Boa madrugada')
    } else if (param >= 6 && param <= 12){
        console.log('Bom dia')
    } else if (param >= 13 && param <= 18) {
        console.log('Boa tarde')
    } else if (param >= 19 && param <= 24) {
        console.log('Boa noite')
    } else {
        console.log('Hora inválida')
    }
}

horaAgora(3)
horaAgora(6)
horaAgora(7)
horaAgora(12)
horaAgora(13)
horaAgora(18)
horaAgora(19)
horaAgora(20)
horaAgora()

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const ImprimirResultado = function (nota) {
    if (nota.entre(9,10)) {
        console.log('Quadro de honras')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

ImprimirResultado(10)
ImprimirResultado(8.9)
ImprimirResultado(6.35)
ImprimirResultado(4)
ImprimirResultado(2.21)
ImprimirResultado(0)
ImprimirResultado(-1)