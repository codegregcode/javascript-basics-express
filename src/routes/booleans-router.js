const express = require('express');

const booleansRouter = express.Router();

const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

booleansRouter.post('/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
});

booleansRouter.post('/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

booleansRouter.get('/is-odd/:num', (req, res) => {
  if (Number.isNaN(parseInt(req.params.num, 10))) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
  res.status(200).json({ result: isOdd(req.params.num) });
});

booleansRouter.get('/:word/starts-with/:char', (req, res) => {
  if (req.params.char.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200).json({ result: startsWith(req.params.char, req.params.word) });
});

module.exports = booleansRouter;
