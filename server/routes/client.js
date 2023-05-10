// Definir rota API do model "Client"
const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

router.get('/', async (req, res, next) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) {
      res.sendStatus(404);
    } else {
      res.json(client);
    }
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) {
      res.sendStatus(404);
    } else {
      await client.update(req.body);
      res.json(client);
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) {
      res.sendStatus(404);
    } else {
      await client.destroy();
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
