const fs = require('fs');
const http = require('http');
const url = require('url');



 //Mroe level of Read JSON file in NODEJS

 const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
 const dataObject = JSON.parse(data);

 const server = http.createServer((req, res) => {
     const pathName = req.url;
     if(pathName === '/' || pathName === '/overview'){
         console.log("This is in Overview");
     }
     else if(pathName === '/product'){
        console.log("This is in Product");
     }
     else if(pathName === '/api'){
        res.writeHead(200, {'Content-type' : 'application/json'});
        res.end(data);
        

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

  