import db from "./db";

export const createUser = (email, password) => {
  const result = db
    .prepare("INSERT into users  (email,password) VALUES (?,?)")
    .run(email, password);
  console.log("the result", result);
  return result.lastInsertRowid;
};

export const isUserAccountPresent = (email) => {
  const users = db.prepare('SELECT * from users where email = ?').get(email);
  return users;
}