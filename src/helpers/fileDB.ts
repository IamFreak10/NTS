import path from 'path';
import fs from 'fs';

const filePath = path.join(process.cwd(), "src/data/user.json");
console.log(filePath);
export function readUsers() {
  const data = fs.readFileSync(filePath, 'utf-8');
  console.log(data);
  return JSON.parse(data);
}
export function writeUsers(users: any) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}
