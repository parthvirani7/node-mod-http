const http = require("http");

http
  .createServer((req, res) => {
    
    let data = "parth virani"

    console.log("server  running1");

    res.write(data);
    res.write("hello js");
   
    res.end();
  }).listen(3000);


