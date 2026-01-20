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
    // health route
    if (req.url == '/api' && req.method == 'GET') {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(
        JSON.stringify({
          message: 'Health status OK',
          path: req.url,
        })
      );
    }

    if (req.url == '/api/users' && req.method == 'POST') {
      let body = '';
      // liste for data chunk,
      req.on('data', (chunk) => {
        body += chunk.toString();
      });

      req.on('end', () => {
          try{
              const parseBody = JSON.parse(body);
        console.log(parseBody);
        console.log("Having  Changes...")
        res.end(
          JSON.stringify({
            mesage: 'Processing',
          })
        );
          }catch(error){
            res.end(
              JSON.stringify({
                mesage: 'Error',
              })
            );
          }
      });
    }
  }
);

server.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
