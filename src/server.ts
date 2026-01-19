
import http, { IncomingMessage, Server, ServerResponse } from 'http';
import config from './config';
const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log('Server Is Running\n');
    if (req.url == '/' && req.method == 'GET') {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(
        JSON.stringify({
          message: 'Hello From Node JS',
          path: req.url,
        })
      );
    }
  }
);

server.listen(config.port,()=>{
    console.log(`Server is running on port ${config.port}`);
})
