// função de forma literal
function fun1(parametros) {  

}
// armazenar em uma variavel
// funcao anônima
const fun2 = function (parametros) {  

}
//armazenar função em um array
//função anonima
const array = [function (param1, param2) {return param1 + param2}, 'outroelemento', fun1, fun2]
console.log(array[0](2,5)) //executando uma função armazenada em um array

//armazenar função em um atributo de um objeto
//funcao anonima
const obj = {}
obj.somar = function (a, b) {return a + b }
console.log(obj.somar(2,4)) //chamando a função dentro do objeto obj

//Passar uma função como paramentro para outra função
function run(fun1) {
    fun1()
}
//passando uma função anonima como parametro para função run
run(function () { console.log('Executando função por parametro...') })

//função pode retornar/conter outra função
function soma(a, b){
    //retornando uma função anonima
    return function (c){
        aux = (a + b + c)
        console.log(`Resultado é: ${aux}`)
    }
}
soma(2,3)(4)