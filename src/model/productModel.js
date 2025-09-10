let produtos = [
    {
        "id": 1,
        "nome": "Camisa de algodão",
        "descricao": "Camiseta de algodão 100% com gola careca.",
        "preco": 39.90,
        "categoria": "Vestuário",
        "estoque": 120,
        "ativo": false
    },
    {
        "id": 2,
        "nome": "Notebook Dell Inspiron 15",
        "descricao": "Notebook com Intel i5, 8GB RAM e SSD de 256GB.",
        "preco": 3799.00,
        "categoria": "Eletrônicos",
        "estoque": 15,
        "ativo": true
    },
    {
        "id": 3,
        "nome": "Cafeteira Elétrica Mondial",
        "descricao": "Cafeteira com capacidade para 18 xícaras e sistema corta-pingos.",
        "preco": 149.99,
        "categoria": "Eletrodomésticos",
        "estoque": 32,
        "ativo": true
    },
    {
        "id": 4,
        "nome": "Livro 'O Poder do Hábito'",
        "descricao": "Charles Duhigg explora como os hábitos moldam nossas vidas.",
        "preco": 59.90,
        "categoria": "Livros",
        "estoque": 85,
        "ativo": false
    },
    {
        "id": 5,
        "nome": "Fone de Ouvido Bluetooth JBL",
        "descricao": "Modelo sem fio com autonomia de até 20 horas.",
        "preco": 279.90,
        "categoria": "Acessórios",
        "estoque": 50,
        "ativo": true
    }
]

//função para retornar todos os usuarios
const retornaTudo = () => {
    return produtos;
}

const retornarProduto = (idOuNome) => {
    const idNumero = Number(idOuNome);

    if (!isNaN(idNumero)) {
        //retornar pela id
        return produtos.find(produto => produto.id === idNumero);
    } else {
        //retornar pelo nome
        return produtos.find(produto => produto.nome.toLowerCase() === idOuNome.toLowerCase());
    }
}

const criarProduto = (novoProduto) => {
    const novaId = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1;
    const produtoId = { id: novaId, ...novoProduto };
    produtos.push(produtoId);
    return produtoId;
}

const modificarProduto = (modificacoes) => {
    const { id } = modificacoes;
    const index = produtos.findIndex(produto => produto.id === parseInt(id));

    produtos[index] = { ...produtos[index], ...modificacoes };

    return produtos[index];
};

const deletarProduto = (produto) => {
    const id = Number(produto);

    const index = produtos.findIndex(produto => produto.id === id);

    if (index !== -1) {
        produtos.splice(index, 1);
        return true;
    } else {
        return undefined;
    }
};


module.exports = {
    retornaTudo,
    retornarProduto,
    criarProduto,
    modificarProduto,
    deletarProduto,
}