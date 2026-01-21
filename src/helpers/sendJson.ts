import { ServerResponse } from 'http';

function sendJson(res: ServerResponse, statusCode: number, data: any) {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify(data));
}
export default sendJson;