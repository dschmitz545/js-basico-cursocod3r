let numero = 1
{
    // let tem escopo global, escopo de função e escopo de bloco
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)