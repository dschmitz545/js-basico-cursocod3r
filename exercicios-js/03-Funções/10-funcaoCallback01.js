//calback - passar uma função, e essa função sera chamada
// quando esse evento acontecer
// o evento é loop, cada um dos elementos que ele percorre no array
 const fabricantes = ["Mercedes","Audi","GM","BMW"]

 function imprimir(nome, indice) {
     console.log(`${indice + 1}. ${nome}`)
 }

 //funcao de callback
 fabricantes.forEach(imprimir)

 //outro exemplo
 fabricantes.forEach(function(fabricante){
     console.log(fabricante)
 })

 //callback usando arrow function
 fabricantes.forEach(fabricante => console.log(fabricante))