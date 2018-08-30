const http = require('http')
const fs = require('fs')
http.createServer(function (request, response) {
    console.log('request come', request.headers.host)

    const host = request.headers.host

    if (request.url === '/') {
        const html = fs.readFileSync('test.html', 'utf8')
        if (host === 'test.com:8888') {
            response.writeHead(200, {
                'Content-Type': 'text/html',
                'Set-Cookie': ['id=123; max-age=2222','abc=456;max-age=2222;domain=test.com:8888']
            })
        }
        response.end(html)
    }




}).listen(8888)

console.log('server listening 88888')