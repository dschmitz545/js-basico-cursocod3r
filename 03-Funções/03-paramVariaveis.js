//arguments é um array interno de uma função
//toda função tem esse array disponivel
//quando nenhum parametro é passado, esse array fica vazio

//função não foi preparada para receber parametros
//mas ainda é possível trabalhar com parametros
//devido ao array arguments
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    //return Number(soma.toFixed(100))
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))