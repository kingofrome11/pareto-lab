import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { fetchClients, addClient, updateClient, deleteClient } from '../api';

const gridStyles = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '0 auto',
  '& > *': {
    marginBottom: '16px',
  },
};

const Clients = () => {
  // Define o estado inicial dos clientes como um array vazio
  const [clients, setClients] = useState([]);

  // Busca os clientes da API assim que o componente é montado
  useEffect(() => {
    const getClients = async () => {
      const data = await fetchClients();
      setClients(data);
    };

    getClients();
  }, []);

  // Adiciona um novo cliente ao estado e à API
  const handleAddClient = async (client) => {
    const newClient = await addClient(client);
    setClients([...clients, newClient]);
  };

  // Atualiza um cliente no estado e na API
  const handleUpdateClient = async (id, client) => {
    const updatedClient = await updateClient(id, client);
    const newClients = clients.map((c) => (c.id === id ? updatedClient : c));
    setClients(newClients);
  };

  // Remove um cliente do estado e da API
  const handleDeleteClient = async (id) => {
    await deleteClient(id);
    const newClients = clients.filter((c) => c.id !== id);
    setClients(newClients);
  };

  return (
    <div>
      {/* Botão para adicionar um novo cliente */}
      <Button variant="contained" color="primary" sx={gridStyles} onClick={() => handleAddClient({ name: 'New Client', email: 'newclient@example.com' })}>Add Client</Button>
      {/* Tabela para exibir os clientes */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Mapeia os clientes para exibi-los na tabela */}
            {clients.map(client => (
              <TableRow key={client.id}>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.phone}</TableCell>
                {/* Botões para editar e excluir um cliente */}
                <TableCell>
                  <Button variant="outlined" color="primary" onClick={() => handleUpdateClient(client.id, { name: 'Updated Client', email: 'updatedclient@example.com' })}>Edit</Button>
                  <Button variant="outlined" color="secondary" onClick={() => handleDeleteClient(client.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Clients;