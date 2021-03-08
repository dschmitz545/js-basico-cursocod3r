// precedencia: arrow function e depois o bind
// this aponta para o objeto no qual a funçao foi escrita

let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) //agora o this, sempre vai apontar para o obj
comparaComThis(global) //mesmo com bind, o this não aponta mais para o global
comparaComThis(obj) //this vai apontar para o obj, por conta do bind

// no contexto de arrow function, o this sempre aponta para a arrow function
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) //é o mesmo que this //aponta para o módulo atual

// precedencia: arrow function e depois o bind
// this aponta para o objeto no qual a funçao foi escrita
// mesmo tentando mudar com bind, isso não vai acontecer
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)