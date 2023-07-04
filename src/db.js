import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "robert",
  password: "password",
  port: 3306,
  database: "organismdb",
});
