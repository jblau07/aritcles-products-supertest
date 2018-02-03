const express = require('express');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/products');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.send('smoke test');
});

module.exports = app;