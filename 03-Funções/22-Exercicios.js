/*01) Crie uma função que dado dois valores 
(passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores*/
const operacao = function calc(x=0, y=0){
    sum = x + y
    sub = x - y
    mult = x * y
    div = x / y
    return console.log(`01 - soma:${sum}, subtracao:${sub}, multiplicacao:${mult}, divisão:${div}`)

}
operacao(100,2)

/*02) Os triângulos podem ser classificados em 3 
tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três 
lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. 
(Neste exemplo deve-se abstrair as condições 
matemáticas de existência de um
triângulo).*/

function triangulo(x=0, y=0, z=0){
    if(x === y && y === z){
        console.log('02 - Triângulo Equilátero')

    } else if(x === y && x !== z || x === y && y !== z || y === z && y !== x || z === x && z != y){
        console.log('02 - Triâgulo Isósceles')

    }else {
        console.log('02 - Triângulo Escaleno')
    }
}

triangulo(1,1,1)
triangulo(2,2,1)
triangulo(2,5,1)

/*03) Crie uma função que recebe dois parâmetros, 
base e expoente, e retorne a base elevada ao expoente.
*/

function baseExp(m=0, n=0){
    result = Math.pow(m,n)
    return console.log(`03 - base ${m} e expoente ${n}, é igual a: ${result}`)

}

baseExp(5,4)

/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/
function divid(a=0, b=0){
    result1 = (a / b)
    result2 = (a % b)
    return console.log(`04 - O resultado da  divisão de ${a} e ${b} é ${result1}, o resto da divisão é ${result2}`)
}
divid(15,2)
divid(10,2)

/*05) Lidar com números em JavaScript pode dar muita dor de cabeça. 
Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2);
O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o 
ponto é utilizado no lugar da vírgula e vice versa. 
Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. 
Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 
e retorne R$0,30 (observe a vírgula e o ponto).
*/
function format(ab = 0){
    valorReal = `05 - R$ ${ab.toFixed(2).toString().replace(".", ",")}`
    console.log(valorReal)
}

format(0.1 + 0.2)

/*06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros 
e tempo de aplicação. A primeira função retornará o montante da aplicação 
financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/
function MontanteSimples(capital, taxa, tempo){
    const jurosSim = (capital * (taxa / 100) * tempo)
    const MontanteSim = (capital + jurosSim)
    return console.log(`06 - O montante da aplicação em juros simples é de R$:${MontanteSim.toFixed(2).toString().replace(".", ",")}`)

}

function MontanteComposto(capital, taxa, tempo){
    const MontanteCompo = (capital * Math.pow( 1 + (taxa / 100),tempo))
    return console.log(`06 - Montante composto é de R$${MontanteCompo.toFixed(2).toString().replace(".", ",")}`)
}

MontanteSimples(1200, 2, 15)
MontanteComposto(5000, 1, 6)