var fnFilter = require('./q6_filter.js')
var caminho = process.argv[2]
var extension = process.argv[3]

fnFilter(caminho, extension, function(err, list){

    if(err) console.log('Alguma coisa deu errado '+err)

    list.forEach(function(file) {
        console.log(file)
    }, this);
})
