const hbs = require('hbs');
const fs = require('fs');
const product = JSON.parse(fs.readFileSync('./data/data.json'));

hbs.registerHelper('getPRODUCTS',function(){
    var products
})