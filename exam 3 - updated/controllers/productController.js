var bodyParser = require('body-parser');

var fs = require('fs');

var urlencodedParser = bodyParser.urlencoded({extended: false});

var jsondata =  fs.readFileSync('controllers/catalog.json');

var maindata = JSON.parse(jsondata);

module.exports.maindata = maindata;

module.exports = function(app) {

    app.get('/', (req, res)=>{
		console.log("get requested");
        res.render('view.ejs', {data:maindata});
    });

    app.post('/:id', urlencodedParser, (req,res)=>{
		console.log("post requested");
        var index = req.params.id;
        console.log(req.params.id);
        maindata.products[index].title = req.body.title;
        maindata.products[index].quantity = req.body.quant;
        const writedata = JSON.stringify(maindata);
        fs.writeFileSync("controllers/catalog.json", writedata, (err)=>{
            if (err) throw err;
            else console.log("Data Overrided");
        })
        res.redirect('/');
    });

    app.delete('/:item', (req, res)=>{
		console.log("delete requested");
        maindata.products = maindata.products.filter(function(list) {
            return list.title.replace(/ /g, '-') !== req.params.item;
        });
        const writedata = JSON.stringify(maindata);
        fs.writeFileSync("controllers/catalog.json", writedata, (err)=>{
            if (err) throw err;
            else console.log("Deleted Successfully");
        });
    });
}