const fs = require('fs');

const caminho = __dirname + '/conf.json'

// é sincrono, cuidado
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    var config = conteudo //é uma string, então o console abaixo, não funciona
    // console.log(`${config.db.host}:${config.db.port}`)

    // para transformar em um objeto
    var config = JSON.parse(conteudo)
    console.log(`so irá exibir quando estiver totalmente carregado: ${config.db.host}:${config.db.port}`) 
})

//Lendo um json direto
const config = require('./conf.json')
console.log(config.db)

//Lendo um diretório - retorna um array
fs.readdir(__dirname,(err, arquivos) => {
    console.log('lendo conteudo da pasta...')
    console.log(arquivos)
    console.log(arquivos[2])
    arquivos.forEach(function(nome, indice){
        console.log(`indice: ${indice} - ${nome}`)
    })
})