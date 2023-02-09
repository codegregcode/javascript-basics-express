const express = require('express');

const app = express();

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacters,
  firstCharacter,
} = require('./lib/strings');

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  // eslint-disable-next-line no-unused-expressions
  req.query.length
    ? res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) })
    : res.status(200).json({ result: firstCharacter(req.params.string) });
});

module.exports = app;
