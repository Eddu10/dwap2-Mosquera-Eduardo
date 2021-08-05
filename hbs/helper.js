const hbs = require('hbs');
const fs = require('fs');
const product = JSON.parse(fs.readFileSync('./data/data.json'));

hbs.registerHelper('getPRODUCTS',function(){
    var products = "";
    product.forEach(prod => {
        products += '<div class="cartelera">';
        products += '<h4>'+prod.nombre+'</h4>';
        products += '<img src="'+prod.url+'"  width="250px">';
        products += '<p><strong>2D:</strong>'+prod.precio2d+'</p>';
        products += '<p><strong>3D:</strong>'+prod.precio3d+'</p>';
        products += '</div>';
    });
    return new hbs.SafeString(products);
})