import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const gridStyles = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '0 auto',
  '& > *': {
    marginBottom: '16px',
  },
};

const ClientForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // call the API to add/edit the client
  };

  return (
    <form sx={gridStyles} onSubmit={handleSubmit}>
      <TextField label="Name" value={name} onChange={event => setName(event.target.value)} />
      <TextField label="Email" value={email} onChange={event => setEmail(event.target.value)} />
      <TextField label="Phone" value={phone} onChange={event => setPhone(event.target.value)} />
      <Button variant="contained" color="primary" type="submit">Save</Button>
    </form>
  );
};

export default ClientForm;