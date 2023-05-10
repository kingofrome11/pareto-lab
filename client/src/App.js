import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Clients from './components/Clients';
import ClientForm from './components/ClientForm';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">CRM App</Typography>
          <Button color="inherit" component={Link} to="/">Clients</Button>
          <Button color="inherit" component={Link} to="/client">Add/Edit Client</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Clients />} />
        <Route path="/client" element={<ClientForm />} />
      </Routes>
    </Router>
  );
};

export default App;