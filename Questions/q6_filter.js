var fs = require('fs')
var path = require('path')

module.exports = function(caminho, extension, callback){
    fs.readdir(caminho, function(err, list){
        if(err) return callback(err)

        list = list.filter(function (file){
           return path.extname(file) === '.' + extension
        })

        callback(null, list)
    })
}