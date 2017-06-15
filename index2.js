const http = require('http');

function request_handler(req, res){

    var body = 'Thanks for calling';
    var len = body.length;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(body);
}

const server = http.createServer(request_handler);

server.listen(8081);