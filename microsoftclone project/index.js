const http = require('http')
const fs = require('fs');

const hostname = '127.0.0.2';
const port = 3000;
const home = fs.readFileSync('./home/home.html')
const microsoft365 = fs.readFileSync('./microsoft 365/micro.html')
const office = fs.readFileSync('./office/index.html')
const windows = fs.readFileSync('./window/window.html')
const surface = fs.readFileSync('./surface/surface.html')
// const xbox = fs.readFileSync('./xbox/xbox.html')
const support = fs.readFileSync('./support/support.html')
const error = fs.readFileSync('./errorpage/error.html')

const server = http.createServer((req,res)=>{
    console.log(req.url);
    url = req.url;
    res.statusCode = 200;
    res.setHeader('content-type','text/HTML');
    if(url == '/home'){
        res.end(home);
    }
    else if(url == '/microsoft 365'){
        res.end(microsoft365);
    }
    else if(url == '/office'){
        res.end(office);
    }
    else if(url == '/windows'){
        res.end(windows);
    }
    else if(url == '/surface'){
        res.end(surface);
    }
    else if(url == '/xbox'){
        res.end(xbox);
    }
    else if(url == '/support'){
        res.end(support);
    }
    else{
        res.statusCode = 404;
        res.end(error)
    }
});

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
});