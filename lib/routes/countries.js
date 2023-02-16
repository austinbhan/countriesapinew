const { Router } = require('express');
const { Country } = require('../models/Country');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await Country.getAll();
      res.json(data);
    } catch(e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const data = await Country.getById(req.params.id);
      res.json(data);
    } catch(e) {
      next(e);
    }
  });
