const http = require("http");

const port = 2000;

http
  .createServer((req, res) => {
    console.log("server  running2");

    res.write("hello world");
    res.end();
  })
  .listen(port);
