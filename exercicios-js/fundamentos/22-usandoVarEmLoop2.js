const funcs = []

// problema, pois com var, não existe escopo de funcao
// vai imprimir 10 para todas as chamadas da função
for(var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()