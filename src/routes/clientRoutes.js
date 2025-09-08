const express = require('express');

const rota = express.Router();

const clienteController = require('../controller/clientController');

rota.get('/', clienteController.obterTodosUsuarios);
rota.post('/', clienteController.criarUsuario);
rota.get('/:id', clienteController.obterUsuarioPelaId);
rota.patch('/', clienteController.modificarUsuario);
rota.delete('/:id', clienteController.deletarCliente);

module.exports = rota;