var http = require("http");

http.createServer(function(request, response) {
    console.log("create server function");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);
console.log("server created");