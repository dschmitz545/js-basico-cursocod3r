const sequencia = {
    _valor: 1, // nao quer dizer, que é uma variavel privada,o js não vai barrar isso, 
               // porém, é uma convensão entre programadores, que essa variavel é pretendida 
               // ser acessada apenas internamente
    get valor() {return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
console.log(sequencia._valor) // não é barrado o acesso
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 850
console.log(sequencia.valor, sequencia.valor)