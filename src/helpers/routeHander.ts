import { IncomingMessage, ServerResponse } from "http";
type Route=Map<string,Map<string,RouteHandler>>
type RouteHandler=(req:IncomingMessage,res:ServerResponse)=>void;
const routes : Route=new Map();
function adddRoute(method:string,path:string,handler:RouteHandler){
    if(!routes.has(method)) routes.set(method,new Map());
    routes.get(method)!.set(path,handler);

}
export default adddRoute;
export {routes};
export type {Route,RouteHandler};
