// do-while, executa pela menos sempre uma vez

function geraInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let op = -1

do {
    op = geraInteiroAleatorioEntre(-1, 20)
    console.log(`valor escolhido ${op}`)
} while(op != -1)

console.log('Terminou')