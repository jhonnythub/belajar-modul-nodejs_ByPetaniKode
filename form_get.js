var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);

    if(q.pathname == "/search" && req.method === "GET"){
        var keyword = q.query.keyword;

        if( keyword ){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("<h3>Search Result:</h3>");
            res.write("<p>Anda mencari: <b>" + keyword + "</b></p>");
            res.write("<pre>Tidak ada hasil! Maaf website ini sedang dalam pengembangan</pre>");
            res.end("<a href='/search'>Kembali</a>");
        } else {
            fs.readFile('search.html', (err, data) => {
                if (err) {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    return res.end("404 Not Found");
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
        }
    }
}).listen(8080);

console.log("Server running on http://localhost:8080");