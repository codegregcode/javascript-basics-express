const express = require('express');

const arraysRouter = express.Router();

const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

arraysRouter.post('/element-at-index/:index', (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.index, req.body.array) });
});

arraysRouter.post('/to-string', (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
});

arraysRouter.post('/append', (req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
});

arraysRouter.post('/starts-with-vowel', (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
});

arraysRouter.post('/remove-element', (req, res) => {
  res.status(200).json({ result: removeNthElement2(req.query.index, req.body.array) });
});

module.exports = arraysRouter;
