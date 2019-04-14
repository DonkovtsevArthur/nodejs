const http = require("http");
http
  .createServer(function(request, response) {
    response.end("Hello World NodeJS");
  })
  .listen(3000, "127.0.0.1", () =>
    console.log("Server begin listen on port 3000")
  );
