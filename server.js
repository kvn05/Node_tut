// used to create HTTP server

var http = require('http')

var a = 10;
var b = 20;
var c = 30;

http.createServer((req,res)=>{

    res.writeHead(200, {'content-type':'text/html'});  // it specifies that the content type of the response in HTML. 
    // check by commenting the above line 
    res.write("A value is: " + a)
    res.write("<br/>B value is: " + b);              
    res.write("<br/>C value is: " + c);
    res.end("</br>end");            

}).listen(3000);

console.log("Server is started on http://127.0.0.1:3000");

