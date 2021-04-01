// factory retorna um novo objeto
//Factory simples
function criarProduto(produto, preco, desconto = '5%', ativo = 'não'){
    return {
        produto: produto,
        preco: preco,
        desconto: desconto,
        ativo: ativo,

    }
}

console.log(criarProduto('Arroz', 10.00, '2%', 'sim'))
console.log(criarProduto('Feijão' , 5.52, '1%', 'nao'))