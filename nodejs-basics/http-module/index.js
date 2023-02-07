const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200)
    res.end('first web server with http module')
}).listen(3000,() => {
    console.log('server is running on port 3000');
})

