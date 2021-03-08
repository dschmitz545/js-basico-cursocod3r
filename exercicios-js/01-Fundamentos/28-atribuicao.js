// = atribuicao
const a = 7
let b = 4

b += a //atribuição aditiva, mesmo que b = b + a
console.log(b)

b -= a //atribuição subtrativa, mesmo que b = b - a
console.log(b)

b *= 2 //atribuição multiplicativa, mesmo que b = b * 2
console.log(b)

b /= 2 //atribuição divisiva, mesmo que b = b / 2
console.log(b)

b = 3
b %= 2 // atribuição modular(resto da divisão), mesmo que b = b % a
console.log(b)

//A partir do ES7
let ba = 2
 ba **= 3 //atribuição de exponenciação
 console.log(ba)