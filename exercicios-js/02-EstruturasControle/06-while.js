function geraInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let op = 0

while(op != -1){
    op = geraInteiroAleatorioEntre(-1, 20)
    console.log(`valor escolhido ${op}`)
}

console.log('Terminou')