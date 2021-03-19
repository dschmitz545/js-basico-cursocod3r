// Um objeto em js, tem uma referência para seu prototipo e essa é a forma que o js, define herança.
// A partir da referência para um prototipo, você tem uma referência para outro objeto, e esse objeto tem atibutos e 
// comportamentos que podem ser acessados a partir do objeto filho, você pode colocar um atributo que não
// existe no filho, e ele vai procurar no prototipo pai, se não achar no pai, vai procurar no pai do pai e vai percorrendo
// a cadeia de prototipos, ate encontrar aquele determinado atributo,se nao encontrar, retorna undefined 
// protótipo é uma forma de reuso

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}
console.log(ferrari.prototype) //não retorna nada, o atributo prototype, existe somente dentro de funções
console.log(ferrari.__proto__) //a partir de um objeto, acessar o protótipo dele, é atravez desse exemplo
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)