/* primeiro exemplo, gera um problema
* nesse caso, quem dispara a função
* é o contador dentro da função
* setInterval, e o this vai se referir
* a função setInterval, e não ao atributo
* da função Pessoa
/*
/*function Pessoa () {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
*/
// segundo exemplo, usando bind, para referencia ao atributo
// do objeto Pessoa
/*function Pessoa () {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //amarra o this do objeto Pessoa a chamada da função setInterval
}
*/
//terceiro exemplo
//muito utilizada em JS
function Pessoa () {
    this.idade = 0
    
    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }, 1000) //milisegundos
}
new Pessoa