var fs = require('fs')
var buf = require('buffer')


fs.readFile(process.argv[2], callback);

function callback (err, data){
    if (err) console.log(err);
    var resultado = data.toString().split('\n').length -1;
    console.log(resultado)
}




