let clientes = [
  {
    "id": 101,
    "nome": "Ana Paula Silva",
    "email": "ana.silva@email.com",
    "telefone": "(11) 98876-4321",
    "endereco": {
      "rua": "Rua das Flores",
      "numero": "123",
      "bairro": "Jardim América",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "01435-000"
    },
    "dataCadastro": "2023-03-15T10:22:00Z",
    "ativo": true
  },
  {
    "id": 102,
    "nome": "Bruno Henrique Oliveira",
    "email": "bruno.henrique@email.com",
    "telefone": "(21) 99876-1234",
    "endereco": {
      "rua": "Avenida Brasil",
      "numero": "456",
      "bairro": "Centro",
      "cidade": "Rio de Janeiro",
      "estado": "RJ",
      "cep": "20040-002"
    },
    "dataCadastro": "2022-11-10T15:45:30Z",
    "ativo": false
  },
  {
    "id": 103,
    "nome": "Camila Rodrigues",
    "email": "camila.r@email.com",
    "telefone": "(31) 98560-2233",
    "endereco": {
      "rua": "Rua Minas Gerais",
      "numero": "89",
      "bairro": "Savassi",
      "cidade": "Belo Horizonte",
      "estado": "MG",
      "cep": "30130-130"
    },
    "dataCadastro": "2024-05-22T09:10:00Z",
    "ativo": true
  },
  {
    "id": 104,
    "nome": "Diego Souza Martins",
    "email": "d.souza@email.com",
    "telefone": "(41) 99654-7890",
    "endereco": {
      "rua": "Rua XV de Novembro",
      "numero": "310",
      "bairro": "Centro",
      "cidade": "Curitiba",
      "estado": "PR",
      "cep": "80020-310"
    },
    "dataCadastro": "2024-09-01T14:20:00Z",
    "ativo": true
  },
  {
    "id": 105,
    "nome": "Eduarda Mendes",
    "email": "eduarda.m@email.com",
    "telefone": "(51) 99789-6543",
    "endereco": {
      "rua": "Rua dos Andradas",
      "numero": "200",
      "bairro": "Centro Histórico",
      "cidade": "Porto Alegre",
      "estado": "RS",
      "cep": "90020-005"
    },
    "dataCadastro": "2025-01-17T08:00:00Z",
    "ativo": false
  }
]

const retornarTudo = () => {
  return clientes;
}

const retornarUsuario = (idOuNome) => {
  const idNumero = Number(idOuNome);

  if (!isNaN(idNumero)) {
    //retornar pela id
    return clientes.find(cliente => cliente.id === idNumero);
  } else {
    //retornar pelo nome
    return clientes.find(cliente => cliente.nome.toLowerCase() === idOuNome.toLowerCase());
  }
}

const criarCliente = () => {
  
}