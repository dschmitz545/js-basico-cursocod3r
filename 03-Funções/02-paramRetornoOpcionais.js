function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        //sem retorno
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        // com retorno
        return area
    }
}
console.log(area(2,3))
console.log(area(2))
console.log(area())
console.log(area(2,3,5,6,12))
console.log(area(5,5))