// conceito de Closure
// uma função tem conciencia
// do local aonde ela foi definida

const funcs = []

// para cada chamada da função
// como o i agora, tem escopo de bloco
// devido ao uso do let,
// sera impresso um valor diferente, para cada chamada
for(let i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
funcs[3]()
funcs[5]()
funcs[1]()
funcs[9]()
funcs[0]()