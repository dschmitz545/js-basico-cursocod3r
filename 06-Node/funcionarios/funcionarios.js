// um exemplo de acesso a uma api
// no resultado dessa api, 
// estou bunscando uma lista qualquer de funcionarios
// cujo o pais será a China, o genero feminino
// que tenha o menor salario

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')



axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    // const funcMenor = funcionarios
    // .filter(p => p.pais === 'China')
    // .filter(g => g.genero === 'F')
    // .reduce((funcMenor, funcAtual) => {
    //     return funcMenor.salario < funcAtual.salario ? funcMenor : funcAtual
    // })
    // console.log(funcMenor);

    // const funcCanada = funcionarios
    // .filter(p => p.pais === 'Canada')
    // .filter(g => g.genero === 'F')
    // .reduce((funcCanada, funcAtual) => {
    //     return funcCanada.salario > funcAtual.salario ? funcCanada : funcAtual
    // })
    // console.log(funcCanada);

    // const funcBrasil = funcionarios
    // .filter(p => p.pais === 'Brazil')
    // .filter(g => g.genero === 'F')
    // .reduce((funcBrasil, funcAtual) => {
    //     return funcBrasil.salario < funcAtual.salario ? funcBrasil : funcAtual
    // })
    // console.log(funcBrasil);

    const funcRussia = funcionarios
        .filter(p => p.pais === 'Russia')
        .filter(g => g.genero === 'F')
        .reduce((funcRussia, funcAtual) => {
            return funcRussia.salario > funcAtual.salario ? funcRussia : funcAtual
        })
    console.log(funcRussia);
})