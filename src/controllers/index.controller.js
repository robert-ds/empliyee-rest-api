import { pool } from "../db.js"; //  Create connection of db and use it

/**
 * Test connection to database method
 */
export const testConnection = async (req, res) => {
  const [result] = await pool.query("SELECT 1 + 1 AS employees");
  res.json(result[0]);
};
