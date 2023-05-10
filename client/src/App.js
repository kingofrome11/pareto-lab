import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
      <Switch>
        <Route exact path="/">
          <Clients />
        </Route>
        <Route path="/client">
          <ClientForm />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
