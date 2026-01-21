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