import { createPool } from "mysql2/promise";

export async function connect() {
  const connection = await createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PASSWORD,
    database: "node_mysql_ts",
    connectionLimit: 10,
  });
  return connection;
}
