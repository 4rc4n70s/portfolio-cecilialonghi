const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  let filePath = parsedUrl.pathname;

  if (filePath === '/') {
    filePath = '/index.html';
  }

  let absolutePath = path.join(__dirname, filePath);
  let ext = path.extname(absolutePath);

  if (!ext) {
    const htmlPath = absolutePath + '.html';
    if (fs.existsSync(htmlPath)) {
      absolutePath = htmlPath;
      ext = '.html';
    } else {
      const subIndexPath = path.join(absolutePath, 'index.html');
      if (fs.existsSync(subIndexPath)) {
        absolutePath = subIndexPath;
        ext = '.html';
      }
    }
  }

  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(absolutePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        const errorPagePath = path.join(__dirname, '404.html');
        fs.readFile(errorPagePath, (err404, content404) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          if (!err404) {
            res.end(content404, 'utf-8');
          } else {
            res.end('<h1>404 Not Found</h1><p>The requested URL was not found on this server.</p>', 'utf-8');
          }
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
