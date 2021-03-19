// Convertendo de classe para uma função construtora
function Pessoa(nome) {
    this.n1 = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.n1}`)
    }
}

const p1 = new Pessoa('andre')
p1.falar()
const p2 = new Pessoa('Ju')
p2.falar()