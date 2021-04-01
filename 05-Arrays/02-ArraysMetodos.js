const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //adiciona um novo elemento na ultima posição do array
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Sena') //adiciona um elemento na primeira posição do array
console.log(pilotos)

//splice, pode adicionar, remover ou ambos, os elementos do array
pilotos.splice(2,0, 'Bottas', 'Massa') //não vai remover ninguem, e a antes da segunda posição, vai adicionar dois novos elementos
console.log(pilotos)

pilotos.splice(3,1) //remove um elemento a partir do terceiro elemento do array(Massa)
console.log(pilotos)

//Slice - novo array
const algunsPilotos = pilotos.slice(2 )// cria um novo array, a partir do indice 2
console.log(algunsPilotos)
const somePilots = pilotos.slice(1,4) //cria um novo array, a partir do indice 1, ate o indice 4, mas o indice 4 não entra
console.log(somePilots)
