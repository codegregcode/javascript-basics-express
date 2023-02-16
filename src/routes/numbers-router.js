const express = require('express');

const numbersRouter = express.Router();

const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

numbersRouter.get('/add/:num1/and/:num2', (req, res) => {
  const int1 = parseInt(req.params.num1, 10);
  const int2 = parseInt(req.params.num2, 10);

  if (Number.isNaN(int1) || Number.isNaN(int2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: add(int1, int2) });
});

numbersRouter.get('/subtract/:num1/from/:num2', (req, res) => {
  const int1 = parseInt(req.params.num1, 10);
  const int2 = parseInt(req.params.num2, 10);

  if (Number.isNaN(int1) || Number.isNaN(int2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: subtract(int2, int1) });
});

numbersRouter.post('/multiply', (req, res) => {
  let { a, b } = req.body;

  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }

  if (typeof a === 'string' || typeof b === 'string') {
    a = parseInt(a, 10);
    b = parseInt(b, 10);
  }

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: multiply(a, b) });
});

numbersRouter.post('/divide', (req, res) => {
  let { a, b } = req.body;

  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }

  if (typeof a === 'string' || typeof b === 'string') {
    a = parseInt(a, 10);
    b = parseInt(b, 10);
  }

  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: divide(a, b) });
});

numbersRouter.post('/remainder', (req, res) => {
  const { a, b } = req.body;

  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }

  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }

  if (Number.isNaN(parseInt(a, 10)) || Number.isNaN(parseInt(b, 10))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: remainder(a, b) });
});

module.exports = numbersRouter;
