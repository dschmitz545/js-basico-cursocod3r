// var tem escopo global e escopo de função
{
    {
        {
            { 
                // var é visivel, mesmo sendo chamada 
                // fora do bloco que ela foi declarada
                // se não for declarada e chamada, dentro
                // do escopo de funcao
                var sera = 'Sera???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    // variavel dentro de escopo de funcao, so é
    // visivel dentro da função
    var local = 123
    console.log(local)
}
teste()
// console.log(local) //erro