const express = require('express');
const bodyParser = require('body-parser');

var productsRoutes = require('./routes/products');
var cartRoutes = require('./routes/cart');
var categoryRoutes = require('./routes/category');

const errorController = require('./controllers/error');

const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/products', productsRoutes);
app.use('/cart', cartRoutes);
app.use('/category', categoryRoutes);

app.use(errorController.get404);
app.use(errorController.get500);

app.listen(ports, () => console.log(`listening on port ${ports}`));