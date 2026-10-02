const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const routes = { '/': 'index.html', '/index.html': 'index.html', '/style.css': 'style.css', '/script.js': 'script.js' };
http.createServer((req, res) => {
  const file = routes[new URL(req.url, 'http://localhost').pathname];
  if (!file) { res.writeHead(404); res.end('Not found'); return; }
  try {
    res.setHeader('Content-Type', file.endsWith('.css') ? 'text/css; charset=utf-8' : file.endsWith('.js') ? 'text/javascript; charset=utf-8' : 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.end(fs.readFileSync(path.join(__dirname, file)));
  } catch { res.writeHead(500); res.end('Unable to read page'); }
}).listen(4173, '127.0.0.1', () => console.log('Preview: http://127.0.0.1:4173/'));
