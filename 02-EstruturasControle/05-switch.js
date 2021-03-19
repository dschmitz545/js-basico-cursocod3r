// se não usar break, vai executar todos os cases
// a partir do ponto que ele entrar
const ImprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de honras')
            break //desvio de fluxo, manda para o fim
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Numero inválido')
    }
}

ImprimirResultado(10)
ImprimirResultado(8.9)
ImprimirResultado(6.35)
ImprimirResultado(4)
ImprimirResultado(2.21)
ImprimirResultado(0)
ImprimirResultado(-1)