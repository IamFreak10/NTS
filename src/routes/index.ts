import { readUsers, writeUsers } from '../helpers/fileDB';
import parseBody from '../helpers/parseBody';
import adddRoute from '../helpers/routeHander';
import sendJson from '../helpers/sendJson';

adddRoute('GET', '/', (req, res) => {
  sendJson(res, 200, { mesage: 'Hello World', path: req.url });
});
adddRoute('GET', '/api', (req, res) => {
  sendJson(res, 200, { mesage: 'APi Users', path: req.url });
});
adddRoute('POST', '/api/users', async (req, res) => {
  const body = await parseBody(req);
  const data = readUsers();
  const newusers = {
    id: Date.now(),
  };
  const post = {
    ...newusers,
    ...body,
  };
  data.push(post);
  writeUsers(data);
  sendJson(res, 201, { ...body, mesage: 'User Created', path: req.url });
});
adddRoute('PUT', '/api/users/:id', async (req, res) => {
  const { id } = (req as any).params;
  const body = await parseBody(req);

  const users = readUsers();

  const index = users.findIndex((user: any) => user.id == id);

  if (index === -1) {
    sendJson(res, 404, {
      success: false,
      message: 'user not found',
    });
  }

  users[index] = {
    ...users[index],
    ...body,
  };

  writeUsers(users);

  sendJson(res, 202, {
    success: true,
    message: `id ${id} user updated`,
    data: users[index],
  });
});
