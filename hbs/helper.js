const hbs = require('hbs');
const fs = require('fs');
const product = JSON.parse(fs.readFileSync('./data/data.json'));

hbs.registerHelper('getPRODUCTS',function(){
    var products = "";
    product.forEach(prod => {
        products += '<div class="cartelera">';
        products += '<h4>'+nombre+'</h4>';
        products += '<img src="'+url+'" alt="jl" width="250px">';
        products += '<p><strong>2D:</strong>'+precio2d+'</p>';
        products += '<p><strong>3D:</strong>'+precio3d+'</p>';
        products += '</div>'
    });
})