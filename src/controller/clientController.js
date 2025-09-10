const { json } = require('express');
const controllerModel = require('../model/clientModel');

const obterTodosUsuarios = (req, res) => {
    const usuarios = controllerModel.retornarTudo();
    res.status(200).json(usuarios);
}

const obterUsuarioPelaId = (req, res) => {
    const id = req.params.id;
    const usuario = controllerModel.retornarUsuario(id);

    if (usuario) {
        res.status(200).json(usuario);
    } else {
        res.status(404).json({ mensagem: 'Usuario não encontrado no banco de dados 😭😭😭' });
    }
}

const criarUsuario = (req, res) => {
    const { nome, email, telefone, endereco, dataCadastro, ativo } = req.body;

    if (!nome || !email || !telefone || !endereco || !dataCadastro || ativo === undefined) {
        return res.status(400).json({ mensagem: 'Todos os campos devem ser preenchidos' });
    }

    const { rua, numero, bairro, cidade, estado, cep } = endereco;

    if (!rua || !numero || !bairro || !cidade || !estado || !cep) {
        return res.status(400).json({ mensagem: 'Todos os campos do endereço devem ser preenchidos' });
    }

    const novoUsuario = controllerModel.criarCliente({
        nome,
        email,
        telefone,
        endereco: { rua, numero, bairro, cidade, estado, cep },
        dataCadastro,
        ativo
    });

    return res.status(201).json(novoUsuario);
};

const modificarUsuario = (req, res) => {
    const modificacoes = req.body;

    if (!modificacoes || !modificacoes.id) {
        return res.status(400).json({ mensagem: 'O campo Id deve estar presente no JSON' });
    }

    const clienteModificado = controllerModel.modificarCliente(modificacoes);

    if (!clienteModificado) {
        return res.status(404).json({ mensagem: 'Cliente não encontrado' });
    }

    return res.status(200).json({ clienteModificado });
}

const deletarCliente = (req, res) => {
    const id = req.params.id;
    const cliente = controllerModel.deletarCliente(id);

    if (cliente == undefined) {
        res.status(404).json({ mensagem: 'Cliente não encontrado no banco de dados 😭😭😭' });
    } else {
        res.status(200).json({ mensagem: 'Cliente excluido com sucesso 🥳🥳🥳' });
    }
}

module.exports = {
    obterTodosUsuarios,
    obterUsuarioPelaId,
    criarUsuario,
    modificarUsuario,
    deletarCliente,
}