var http = require('http'),
    express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.end('Helloo');
});

http.createServer(app).listen(8080);