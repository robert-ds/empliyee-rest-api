import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "robert",
  password: "Chocolate.2023!",
  port: 3306,
  database: "organismdb",
});
