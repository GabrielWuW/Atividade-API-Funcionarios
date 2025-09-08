const { json } = require('express');
const controllerModel = require('../model/productModel');

const obterTodosProdutos = (req, res) => {
    const usuarios = controllerModel.retornaTudo();
    res.status(200).json(usuarios);
}

const obterProdutoPelaId = (req, res) => {
    const id = req.params.id;
    const produto = controllerModel.retornarProduto(id);

    if (produto) {
        res.status(200).json(produto);
    } else {
        res.status(404).json({ mensagem: 'Produto não encontrado no banco de dados 😭😭😭' });
    }
}

const criarProduto = (req, res) => {
    const { nome, descricao, preco, categoria, estoque, ativo } = req.body;

    if (!nome || !descricao || !preco || !categoria || !estoque || ativo === undefined) {
        return res.status(400).json({ mensagem: 'Todos os campos devem ser preenchidos' });
    } else {
        const novoProduto = controllerModel.criarProduto({ nome, descricao, preco, categoria, estoque, ativo });
        res.status(201).json(novoProduto);

    }
}

const modificarProduto = (req, res) => {
    const modificacoes = req.body;

    const produtoModificado = controllerModel.modificarProduto(modificacoes);

    if (!produtoModificado) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }
    if (!modificacoes.id) {
        return res.status(400).json({ mensagem: 'O campo Id deve estar presente no json' });
    }

    return res.status(200).json({ produtoModificado });
};

const deletarProduto = (req, res) => {
    const id = req.params.id;
    const produto = controllerModel.deletarProduto(id);
    console.log(produto)

    if (produto == undefined) {
        res.status(404).json({ mensagem: 'Produto não encontrado no banco de dados 😭😭😭' });
    } else {
        res.status(200).json({ mensagem: 'Produto excluido com sucesso 🥳🥳🥳' });
    }
}

module.exports = {
    obterTodosProdutos,
    obterProdutoPelaId,
    criarProduto,
    modificarProduto,
    deletarProduto,
}