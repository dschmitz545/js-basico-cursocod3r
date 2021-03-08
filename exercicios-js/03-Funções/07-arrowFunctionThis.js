// vantagens de usar função arrow
// é que o this não fica variando
// no exemplo abaixo, o this, se refere
// ao objeto Pessoa, mesmo ele estar sendo
// utilizado dentro da função setInterval()

function Pessoa () {
    this.idade = 0
    
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000) //milisegundos
}
new Pessoa