import { Router } from "express"; // Import Router to express
import { testConnection } from "../controllers/index.controller.js"; // Import test connection to database method

/**
 * Instance Router to express
 */
const router = Router();

/**
 * Test connection of database
 */
router.get("/ping", testConnection);

/**
 * Export Router
 */
export default router;
