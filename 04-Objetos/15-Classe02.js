class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

// Forma de definir que uma classe é protótipo de outra classe
// ou que uma determinada função, gerada dessa classe, tera como protótipo outra função dentro da classe avo
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) //chamando construtor da classe avo
        this.profissao = profissao
    }

}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }

}

const filho = new Filho
console.log(filho)
const pai = new Pai
console.log(pai)
const avo = new Avo
console.log(avo)