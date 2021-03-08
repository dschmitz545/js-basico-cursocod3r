function tratarErroELanca(erro) {
    //throw 10
    //throw new Error(' Escreva o erro aqui ...')
    //throw true
    //throw 'mensagem a ser exibida'
    throw { //retornando um objeto
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {

        console.log(obj.nome.toUpperCase() + '!!!')

    } catch (e) {
        tratarErroELanca(e)

    } finally {
        console.log('sempre executa o que tem aqui')
    }

}

//const obj = { nome: 'Vinicius' }
const obj = { name: 'Vinicius' }
imprimirNomeGritado(obj)