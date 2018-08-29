const http = require('http')

http.createServer(function (request, response) {
    console.log('request come', request)

    if(request.url === '/'){
        response.writeHead(302, {
            'Location': '/new'
        })
        response.end('')
    }
    if(request.url === '/301'){
        response.writeHead(301, {
            'Location': '/new'
        })
        response.end('')
    }

    if(request.url === '/new') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
        })
        response.end('<div> this is content </div>')
    }

}).listen(8888)

console.log('server listening 88888')