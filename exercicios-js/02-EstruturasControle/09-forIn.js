// mais interresante para objetos, do que usar para arrays

const notas = [6.7, 5.6, 7.9, 2, 8.6, 10]
for(i in notas) {
    console.log(`indice: ${i}, nota = ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silveira',
    idade: 23,
    peso: 67
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)

}