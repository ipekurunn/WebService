const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('<h2>Welcome to xxx Page!</h2>');
  } else if (req.url === '/aboutMe') {
    res.statusCode = 200;
    res.end('<h2>Welcome to xxx Page!</h2>');
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.end('<h2>Welcome to xxx Page!</h2>');
  } else {
    res.statusCode = 404;
    res.end('<h2>Not Found</h2>');
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`Sunucu port ${port} üzerinde çalışıyor.`);
});
