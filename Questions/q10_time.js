

var net = require('net')
var server = net.createServer(function (socket){
    data = new Date()
    socket.end(data.getFullYear() + '-' 
    +zeroFill(data.getMonth() + 1) +'-'+
    zeroFill(data.getDate())+' '
    +data.getHours()+':'+data.getMinutes() 
    + '\n')
}).listen(Number(process.argv[2]))

function zeroFill (i) {
    return (i < 10 ? '0' : '') + i
}