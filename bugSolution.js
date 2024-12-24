const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.on('error', err => {
  console.error('Server error:', err);
  // Add more sophisticated error handling here, such as retrying or alerting.
});

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});
