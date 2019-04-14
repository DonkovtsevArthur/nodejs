const http = require("http");
const os = require("os");
const greeting = require("./greeting.js");

const User = require("./user.js");

let name = new User("Arthur", 35);
name.sayHi();

let userName = os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));

http
  .createServer(function(request, response) {
    response.end("Hello World NodeJS");
  })
  .listen(3000, "127.0.0.1", () =>
    console.log("Server begin listen on port 3000")
  );
