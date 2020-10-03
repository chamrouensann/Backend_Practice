const fs = require('fs');
const http = require('http');
const url = require('url');



 //This is how we set up the Routing in NodeJS

 const server = http.createServer((req, res) => {
     const pathName = req.url;
     if(pathName === '/' || pathName === '/overview'){
         console.log("This is in Overview");
     }
     if(pathName === '/product'){
        console.log("This is in Product");
    }
    else{
        res.writeHead(404,{
            'Content-type': 'text/html',
            'my-header': 'I love you',
        });
        res.end('Page not found!');
    }
   
     console.log(req.url);
     res.end("Hello from the server");
     

 });

 server.listen(8000,'127.0.0.1', () => {
     console.log("Listening to Port 8000");
 });

  