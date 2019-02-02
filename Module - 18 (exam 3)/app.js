var exp = require('express');
var productController = require('./controllers/productController');
var app = exp();

app.set("view engine", "ejs");

app.use(exp.static('.'));

productController(app);
app.listen(3000)
console.log('listening to port 3000');
