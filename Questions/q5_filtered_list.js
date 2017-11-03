var fs = require('fs')
var path = require('path')

var caminho = process.argv[2]
var extension ="." + process.argv[3]

fs.readdir(caminho, callback)

function callback (err, list){
    if (err) console.log(err);
    list.forEach(function(file) {
       if(path.extname(file) === extension) {
           console.log(file)
       }
    }, this)
}




