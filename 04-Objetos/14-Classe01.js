class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    //metodo
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    //metodo
    sumario(){
        let valorConsolidado = 0
            this.lancamentos.forEach(l => {
                valorConsolidado += l.valor
            })
            return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45500)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(3, 2021)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())