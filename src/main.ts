import sqlite3 from "sqlite3";
import listUsers from "./queries/list-users.sql";

const db = new sqlite3.Database("app.db");
try {
  const users = await listUsers.run(db);
  console.log(users);
} finally {
  await new Promise<void>((resolve, reject) => {
    db.close((error) => error ? reject(error) : resolve());
  });
}
