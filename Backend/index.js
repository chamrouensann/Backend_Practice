const fs = require('fs');
const http = require('http');
const url = require('url');



 //This is How we can create the server

 const server = http.createServer((req, res) => {
   
     console.log(req.url);
     res.end("Hello from the server");

 });

 server.listen(8000,'127.0.0.1', () => {
     console.log("Listening to Port 8000");
 });

  