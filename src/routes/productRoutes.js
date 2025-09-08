const express = require('express');

const rota = express.Router();

const productController = require('../controller/productController');

rota.get('/', productController.obterTodosProdutos);
rota.post('/', productController.criarProduto);
rota.get('/:id', productController.obterProdutoPelaId);
rota.patch('/', productController.modificarProduto);
rota.delete('/:id', productController.deletarProduto);

module.exports = rota;