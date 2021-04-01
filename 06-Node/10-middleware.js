//padrão middleware (chain of responsability)

const passo1 = (contexto, proximo) => {
    contexto.valor1 = 'mid1'
    proximo()
}

const passo2 = (contexto, proximo) => {
    contexto.valor2 = 'mid2'
    proximo()
}

const passo3 = contexto => contexto.valor3 = 'mid3'

const execucao = (contexto, ...middlewares) => {
    const execucaoPassos = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](contexto,() => execucaoPassos(indice+1))
    }

    execucaoPassos(0)
}

const contexto = {}
//execucao(contexto, passo1, passo2, passo3)
//console.log(contexto)
//execucao(contexto, passo2, passo1, passo3)
//console.log(contexto)
execucao(contexto, passo3)
console.log(contexto)