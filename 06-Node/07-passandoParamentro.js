// passando parametro para um módulo
module.exports = function(... nomes) /*argumento variavel(pode passar quantos paramentros quiser)*/ {
    return nomes.map(nome => `Boa semana ${nomes}!`)
}