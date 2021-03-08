let num1 = 1
let num2 = 2

// a forma pré fixada tem precedência sobre a forma pós fixada

num1++ //pós fixada
console.log(num1)
--num1 //pré fixada
console.log(num1)

console.log(++num1 === num2--) //true
console.log(num1 === num2) //false
