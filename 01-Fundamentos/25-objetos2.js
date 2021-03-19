console.log(typeof Object)

 //paralelo com java, como se estive chamando direto o construtor
console.log(typeof new Object())
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)
console.log(typeof new Cliente())

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto())