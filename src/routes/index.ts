import parseBody from "../helpers/parseBody";
import adddRoute from "../helpers/routeHander";
import sendJson from "../helpers/sendJson";

adddRoute('GET', '/', (req, res) => {
  sendJson(res, 200, { mesage: 'Hello World' ,
    path:req.url
  });
});
adddRoute('GET', '/api', (req, res) => {
  sendJson(res, 200, { mesage: 'APi Users' ,
    path:req.url
  });
})
adddRoute("POST", "/api/users", async(req, res) => {
  const body= await parseBody(req);
  sendJson(res,201,{...body,mesage:"User Created",path:req.url});

})