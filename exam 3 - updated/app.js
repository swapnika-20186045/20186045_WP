var express = require('express');

var controller = require('./controllers/productController');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

controller(app);

app.listen(5000);

console.log('Listening to port 5000');