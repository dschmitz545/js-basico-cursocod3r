//notação literal
const obj1 = {}
console.log(obj1)

//objeto em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome //esse atributo, com o uso do this, ira ficar disponivel para manipulação, fora deste objeto
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta',1.99, 0.15)
const p2 = new Produto('Notebook', 3999.65, 0.15)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
console.log(p1.nome, p1.preco) // preco não vai estar acessível, pois não foi atribuido ao this, dentro do construtor da classe

//funcao construtora
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return((salarioBase / 30) * (30 - faltas)).toFixed(2)
        }
    }
}

const f1 = criarFuncionario('Ana', 8540, 4)
const f2 = criarFuncionario('Jose', 2500, 3)
console.log(f1.getSalario(), f2.getSalario())


//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
filha.idade = 26
console.log(filha)

//uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)