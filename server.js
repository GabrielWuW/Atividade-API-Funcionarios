const express = require('express'); //Importando o express
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());

const rotasProdutos = require('./src/routes/productRoutes'); //Importando as rotas dos produtos
const rotasClientes = require('./src/routes/clientRoutes'); //Importando as rotas dos clientes

const porta = 8000; //definindo a porta que a api vai rodar

app.use(express.static(path.join(__dirname, 'src/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/public', 'index.html'));
});

app.use('/api/produto', rotasProdutos);
app.use('/api/cliente', rotasClientes);

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});