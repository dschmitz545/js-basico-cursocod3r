/*Tabela verdade E          Tabela verdade OU           Tabela verdade Xor(OU exclusivo)
v e v -> v                  v ou v -> v                 v xor v -> f
v e f -> f                  v ou f -> v                 v xor f -> v
f e f -> f                  f ou v -> v                 f xor v -> v
f e v -> f                  f ou f -> f                 f xor f -> f
|| -> ou
&& -> e
^ -> xor
*/
function compras(trab1, trab2) {
    const comprarSorvete = trab1 || trab2 // ou
    const comprarTV = trab1 && trab2 // e
    const comprarNote = !!(trab1 ^ trab2) // bitwise xor
    const comprarRadio = trab1 != trab2 // tambem simula o xor
    const comprarCel = !trab1 //negação lógica - operador unário

    /*return { 
        comprarSorvete: comprarSorvete, 
        comprarTV: comprarTV, 
        comprarNote: comprarNote,
        comprarRadio: comprarRadio,
        comprarCel: comprarCel
    }*/

    // padrão de retorno de objetos do novo JS2015(ES6)
    // internamente, ele também está fazendo chave:valor
    return { 
        comprarSorvete, 
        comprarTV, 
        comprarNote,
        comprarRadio,
        comprarCel
    }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))