// console.log(global)

globalThis.MeuApp = {
    saudacao() {
        return "Estou em todos os lugares"
    },
    nome: 'Meu sistema'
}

globalThis.MeuApp2 = Object.freeze({
    saudacao() {
        return "Estou em todos os lugares, mas não posso ser alterado"
    },
    nome: 'Meu sistema 2'
})