const contadorA = require('./04-instanciaUnica');
const contadorB = require('./04-instanciaUnica');

const contadorC = require('./04-instanciaNova')(); //detalhe, isso faz com que retorne a funçao factory
const contadorD = require('./04-instanciaNova')();


/* exemplo com node fazendo cache */
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

/* exemplo usando a factory */
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)