const nomes = ['Agatha', 'Aldo', 'Vini', 'Maria']

nomes.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

nomes.forEach(nome => console.log(nome))

const alunos = nomes => console.log(nomes)
nomes.forEach(alunos)

nomes.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})






