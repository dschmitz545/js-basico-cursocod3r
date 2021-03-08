const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
        //console.log(pessoa.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar //conflito entre paradigmas: funcional e OO
falar() //falar nesse contexto, se refere a programação funcional

// sempre que chamar essa função, o this
// será o objeto que foi passado para a função bind
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()