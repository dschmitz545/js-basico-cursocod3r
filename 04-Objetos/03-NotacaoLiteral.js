const a = 1
const b = 2
const c = 3
const obj1 = { a: a, b: b, c: c } //notacao antiga, mais permite alterar o valor de algum atributo passado por parametro
const obj2 = { a, b, c }
console.log(obj1)
console.log(obj2)

const nomeAttr = 'nota'
const valorAttr = 7.98
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function(){ //forma antiga
        // ....
    },
    funcao2() { //forma nova a partir do ec6
        // ....
    }
}
console.log(obj5)