const http = require('http')
const fs = require('fs')
http.createServer(function (request, response) {
    console.log('request come', request)

    const html = fs.readFileSync('test.html', 'utf8')
    const img = fs.readFileSync('test.jpeg')
    if (request.url === '/') {
            response.writeHead(200, {
                'Content-Type': 'text/html',
            })

        response.end(html)
    }  else {
        response.writeHead(200, {
            'Content-Type': 'img/jpeg',
        })
        response.end(img)
    }




}).listen(8888)

console.log('server listening 88888')