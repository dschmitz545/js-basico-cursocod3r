// Cadeia de prototipos (prototype chain)
Object.prototype.atrib0 = 'Z' // não recomendado

const avo = { atrib1: 'A' } //tem como prototipo o Object.prototype
const pai = { __proto__:avo, atrib2: 'B', atrib3: 'M' } //ex1: estabelecendo a relação de protótipo
const filho = { __proto__:pai, atrib3: 'C' } // estabelecendo a relação de protótipo

console.log(filho.atrib1) //procura no filho, não tem, procura no pai, não tem, achou no avo
console.log(filho.atrib0) //procura no filho, não tem, procura no pai, não tem, procura no avo, não tem, procura no Object.prototype.
console.log(filho.atrib) //procura no filho, não tem, procura no pai, não tem, procura no avo, não tem, procura no Object.prototype, não tem, então retorna undefined
console.log(filho.atrib3) //vai procurar no escopo mais abrangente(não vai procurar no pai, pq tem no filho(o atributo foi reescrito))

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h` //this referencia o objeto atual
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //vai ocorrer o sombreamento(shadowing)
}

const volvo = {
    modelo: 'V40',
    status() { 
        return `${this.modelo}: ${super.status()}` //super, vai referenciar o meu protótipo(vai chamar o método do protótipo)
    }                                              //(se usa-se o this, vai ficar invocando de forma recursiva o mesmo método)
}

//ex2: estabelecendo a relação de protótipo
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

