const notas = [7.8, 8.9, 2.6, 10, 7.1, 6.8, 9.2, 3.4, 5.9]

//sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//com callback
const notasBaixas2 = notas.filter(function (notas){
    return notas < 7
})
console.log(notasBaixas2)

// com callback e arrow function
const notasBaixas3 = notas.filter(nota => nota <7)
console.log(notasBaixas3)