const fs = require('fs');
const http = require('http');
const url = require('url');



 //This is how we set up the Routing in NodeJS

 const server = http.createServer((req, res) => {
     const pathName = req.url;
     if(pathName === '/' || pathName === '/overview'){
         console.log("This is in Overview");
     }
     else if(pathName === '/product'){
        console.log("This is in Product");
     }
     else if(pathName === '/api'){
        fs.readFile(`${__dirname}/data/data.json`, 'utf-8', (err, data) => {
            const productData = JSON.parse(data);
            res.writeHead(200, {'Content-type' : 'application/json'});
            res.end(data);
        });
        

     }
    else{
        res.writeHead(404,{
            'Content-type': 'text/html',
            'my-header': 'I love you',
        });
        res.end('<h1>Page not found!</h1>');
    }
   
 });

 server.listen(8000,'127.0.0.1', () => {
     console.log("Listening to Port 8000");
 });

  