// pode ser chamada, mesmo antes de declarar a função
console.log(soma(3, 5))

function soma(x, y) {
    return x + y
}


// so pode ser chamada, depois de declarar a função
//function expression
const sub = function (x, y){
    return x - y
}

console.log(sub(7,2))

// named function - pouco usado, 
// mas util para quando debugar, 
// pois vai aparecer o nome da função
// so pode ser chamada, depois de declarar a função
const mult = function mult(x, y){
    return x * y
}

console.log(mult(7,2))