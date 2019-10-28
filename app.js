
const express = require('express');

const morgan = require('morgan');

const app = express();

app.use(morgan('common'));

const books = require('./books-data.js');

app.get('/books', (req, res) => {
  const { search = ""} = req.query;
  
  let results = books
    .filter(book =>
      book
        .title
        .toLowerCase()
        .includes(search.toLowerCase()));
  
  res
    .json(results);
});