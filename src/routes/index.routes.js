import { Router } from "express"; // Import Router to express
import { pool } from "../db.js"; //  Create connection of db and use it

/**
 * Instance Router to express
 */
const router = Router();

/**
 * Test connection of database
 */
router.get("/ping", async (req, res) => {
  const [result] = await pool.query("SELECT 1 + 1 AS employees");
  res.json(result[0]);
});

/**
 * Export Router
 */
export default router;
