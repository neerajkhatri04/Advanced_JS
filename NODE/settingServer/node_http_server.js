const http = require("http");
const PORT = 3000;

//Using createServer function we can actually create a basic http server.
//This function returns a server object, and take a callback as argument.
//This function only create the server dont starts it.
const server = http.createServer(function listener(request, response) {
  //this callback function will collect any request that
  //we make in out http server

  /*
   *request --> This object help us to get the request made on out http server.
   *response --> This object help us to send a response corresponding to the http request
   *
   */

  if (request.url == "/home") {
    console.log(request.method);
    response.end("Welcome to home");
  }

  console.log("Responsed recieved");
});

//Start the server with listen function.
server.listen(PORT, function exec() {
  console.log("Server is running on port: " + PORT);
});
