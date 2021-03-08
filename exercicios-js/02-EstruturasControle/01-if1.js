function soBoaNota(nota) {
    if(nota >= 7) {
        console.log(`Aprovado com: ${nota}`)
    }
}

soBoaNota(8)
soBoaNota(9)
soBoaNota(7)
soBoaNota(6)

function verdadeiro(valor) {
    if(valor) {
        console.log(`se for verdadeiro ... ${valor}`)
    }
}

verdadeiro()
verdadeiro(null)
verdadeiro(undefined)
verdadeiro(NaN)
verdadeiro('')
verdadeiro(0)
verdadeiro(-1)
verdadeiro(' ')
verdadeiro('?')
verdadeiro([])
verdadeiro([1,2])
verdadeiro({})
verdadeiro({nome:'andre'})