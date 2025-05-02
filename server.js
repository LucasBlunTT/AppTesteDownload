const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.argv[2] || 8080;
const baseDir = __dirname;

http.createServer((req, res) => {
  const filePath = path.join(baseDir, decodeURIComponent(req.url));

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Arquivo não encontrado.');
    }

    const stream = fs.createReadStream(filePath);
    res.writeHead(200, {
      'Content-Disposition': `attachment; filename="${path.basename(filePath)}"`,
      'Content-Type': 'application/octet-stream'
    });
    stream.pipe(res);
  });

}).listen(port, '0.0.0.0', () => {
  console.log(`Servidor acessível externamente na porta ${port}`);
});
