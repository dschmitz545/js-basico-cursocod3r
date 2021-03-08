const escola = "Di3go"
// retorna a letra e
console.log(escola.charAt(2))

// não vai trazer nada
console.log(escola.charAt(10))

// retorna o codigo unicode HTML da letra 3(51)
console.log(escola.charCodeAt(2))

// Não existe valor 3 dentro de Diego, retorna vazio
console.log(escola.indexOf('3'))

// retorna terceira posição
console.log(escola.indexOf('g'))

//retorna a partir do indice 1
console.log(escola.substring(1))

// do indice 0 ate o indice 3 sem incluir o terceiro indice
console.log(escola.substring(0, 3))
console.log(escola.substring(1, 4))

// concatenação
console.log('Escola'.concat(" ").concat(escola).concat(" ").concat("!")) //meio estranho, mas existe
console.log('Escola' + " " + escola + " " + "!") // + em contexto de string ele vai concatenar

//substituição
console.log(escola.replace(3, 'e'))

//converter string para array
console.log('Ana,Maria,Pedro,João'.split(','))
//usando regex
console.log('Ana,Maria,Pedro,João'.split(/,/))
console.log('Ana,Maria,Pedro,João'.split(/./))