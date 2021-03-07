// template string implementado na versão 2015 do javascript
const nome = 'Vinicius'
const concatenacao = 'Olá ' + nome + '!'
console.log(concatenacao)

// vai considerar as quebras de linhas
const template = `
    Olá
    ${nome}!`
    console.log(concatenacao, template)

//expressões
console.log(`1 + 1 = ${1 + 1}`)

// arrow function
const up = texto => texto.toUpperCase()
// chamando uma função pela interpolação
console.log(`Ei.... ${up('esse texto vai ficar em caixa alta')}!`)