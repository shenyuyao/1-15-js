var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine','ejs');
app.use(express.static('public'));
var data = [];
app.get('/',function(req,res){
    res.render('index',{data})
})
app.post('/',bodyParser.urlencoded({extended:false}),function(req,res){
    data.push(req.body)
    res.redirect('/')
})
app.listen(3000);