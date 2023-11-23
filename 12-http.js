const http = require ('http');


const server =  http.createServer((req, res)=>{
    if (req.url=='/'){
        res.end('welcome to the home page');
    }
    else if (req.url=='/about'){
        res.end('About us');
    }
    else{
        res.end(`<h1>opps</h1>`);
    }
})

server.listen(5000);
