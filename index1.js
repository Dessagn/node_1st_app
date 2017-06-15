const http = require('http');

const hostName = '127.0.0.1';
const port = '8080';

const httpServer = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello from Nodejs');
});

httpServer.listen(8080, () => {
    console.log(`Server is running at http://${hostName}:${port}/`);
})