// include http
const http = require('http');

//define host and post 
const hostname = 'localhost';
const port = 3001;

// handle http requests
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Welcome')
});

// start the server
server.listen(port, hostname, () => {
  console.log(`Now listening on http://${hostname}:${port}`)
})

