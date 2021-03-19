// IIFE -> Immediately Invoked Function Expression (Expressão de Função imediatamente Invocada)
// Tudo que for definido dentro da função, será apenas de escopo local
const x = 'ola';
(function(){
    const x = 1
    console.log('será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
    console.log(`dentro da função, o x vale: ${x}`)
})()

console.log(`fora da função, o x vale: ${x}`)