// utiliza o ponto(.) para acessar os atributos, dentro de um objeto
console.log(typeof console);
console.log(Math.ceil(6.11));

const obj1 = {};
obj1.nome = 'Caneta';
//obj1['nome'] = 'Lápis' //sobreescreve o valor
console.log(obj1);
console.log(obj1.nome);


function Obj(nome) {
    //publico
    this.nome = nome;
    this.exec = function () {
        console.log('Exec ...');
    }
}

const obj2 = new Obj('mesa');
const obj3 = new Obj('geladeira');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();