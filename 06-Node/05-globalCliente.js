require('./05-global')

console.log(MeuApp.saudacao())
console.log(MeuApp.nome)
MeuApp.nome = 'Eita!' //modificando um objeto do tipo global
console.log(MeuApp.nome)

// para contornar isso, poderia usar o freeze
console.log(MeuApp2.saudacao())
console.log(MeuApp2.nome)
MeuApp.nome = 'Eita!' //tentando modifir um objeto do tipo global, mas com freeze
console.log(MeuApp2.nome)