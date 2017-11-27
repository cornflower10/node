var http  = require('http');
http.createServer(function(request,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello wrold');
}).listen(8888);


function printHello(){
    console.log('hello');

}

module.exports = printHello;