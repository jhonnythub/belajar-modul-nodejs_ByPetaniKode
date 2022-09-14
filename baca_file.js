var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {
    fs.readFile('index.html', (err, data) => {
        if(err) throw err;

        response.writeHead(200, {'Content-Type': 'text-html'});
        response.write(data);
        response.end();
    });
}).listen(8080);

console.log("Server running on http:localhost:8080");