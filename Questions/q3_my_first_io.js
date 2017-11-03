var fs = require('fs')

var caminho = process.argv[2]

var buf = fs.readFileSync(caminho)
var str = buf.toString()

var result = 0

for (var index = 0; index < str.length-1; index++) {
    if (str[index] === '\n') {
        result++
    }
}

console.log(result)