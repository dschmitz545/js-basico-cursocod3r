function teste1(num) {
    if (num > 7); { //cuidado com o ";" aqui, não usar com estruturas de controle
        console.log(num)
    }
}

teste1(4)
teste1(8)

function teste2(num2) { //cuidado aqui tb
    if(num2 > 7)        // mesmo não tendo chave
        console.log(num2)   // somente essa linha pertence ao if
        
    console.log('Final') //aqui está fora do if e sempre vai ser executado
}

teste2(3)
teste2(9)