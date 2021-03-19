const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa = {nome: 'Maria'}  //erro, não pode atribuir um novo objeto a uma constante

//Tranformar um objeto em constante.
Object.freeze(pessoa)
// com o freeze, não é mais possivel alterar esse objeto

console.log(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa)
pessoa.end = 'Rua ABC'
console.log(pessoa)
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)