const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    const output = JSON.stringify({
      headers: req.headers,
      path: req.url,
      body,
    });
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(output);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
