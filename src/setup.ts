import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("app.db");
try {
  db.exec(`
    create table if not exists users (
      id integer primary key,
      name text not null
    ) strict;
  `);
  console.log("Database initialized.");
} finally {
  db.close();
}
