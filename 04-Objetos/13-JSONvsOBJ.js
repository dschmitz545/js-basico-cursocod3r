//Pegar um objeto e passar para JSON
const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c} }
console.log(JSON.stringify(obj))

// JSON para OBJETO
//objeto gerado a partir de um JSON
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) //Formato JSON VALIDO
console.log(JSON.parse('{"a": 1, "b": "texto aqui", "c": true, "d": {}, "e": [] }'))