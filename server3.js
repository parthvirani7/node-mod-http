const http = require("http");

const port = 2002;

http.createServer((req, res) => {
    let nam = "parth virani";

    console.log("server  running");

    res.write("hello js server 3");
    res.write(nam);
    res.end();
  })
  .listen(2002);
