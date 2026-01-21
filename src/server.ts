import http, { IncomingMessage, Server, ServerResponse } from 'http';
import config from './config';
import adddRoute, { Route, RouteHandler, routes } from './helpers/routeHander';
import "./routes"


const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log('Server Is Running\n');
    const methodMap = req.method?.toUpperCase() || '';
    const path = req.url||'';
    const handler:RouteHandler | undefined = routes.get(methodMap)?.get(path);
    if (handler){
      handler(req,res);
    }else{
      res.end(
        JSON.stringify({
          mesage: 'Error',
        })
      );
    }
    

    
  }
);

server.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
