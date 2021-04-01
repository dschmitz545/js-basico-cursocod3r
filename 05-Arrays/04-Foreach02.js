//Implementando um foreach na unha

//criando uma funcao foreach, dentro do prototipo do Array
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

//carros é um array
const carros = ['Corsa', 'Uno', 'Celta', 'Gol', 'Focus']

carros.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})