const http = require('http')

http.createServer(function (request, response) {
    console.log('request come', request)

    response.end('124')
}).listen(8888)

console.log('server listening 88888')