// Importa a biblioteca axios para fazer requisições HTTP
import axios from 'axios';

// Define a URL base da API
const API_URL = 'http://localhost:3000';

// Função para buscar todos os clientes
export const fetchClients = async () => {
  // Faz uma requisição GET para a API e retorna os dados
  const response = await axios.get(`${API_URL}/clients`);
  return response.data;
};

// Função para adicionar um novo cliente
export const addClient = async (client) => {
  // Faz uma requisição POST para a API com os dados do novo cliente e retorna os dados do cliente adicionado
  const response = await axios.post(`${API_URL}/clients`, client);
  return response.data;
};

// Função para atualizar um cliente existente
export const updateClient = async (id, client) => {
  // Faz uma requisição PUT para a API com os dados atualizados do cliente e retorna os dados do cliente atualizado
  const response = await axios.put(`${API_URL}/clients/${id}`, client);
  return response.data;
};

// Função para excluir um cliente existente
export const deleteClient = async (id) => {
  // Faz uma requisição DELETE para a API para excluir o cliente com o ID informado e retorna os dados do cliente excluído
  const response = await axios.delete(`${API_URL}/clients/${id}`);
  return response.data;
};
