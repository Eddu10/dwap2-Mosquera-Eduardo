const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helper');
const port=process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');

app.get('/', (req, res)=>{
    res.render('home');
})

app.listen(port);