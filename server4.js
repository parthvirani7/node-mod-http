const http = require("http");
http
  .createServer((req, res) => {
    
    console.log("server  running2");
    res.write("hello node js");
    res.end();
  })
  .listen(3333);  
