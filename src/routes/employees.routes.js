import { Router } from "express"; // Import Router to express
import {
  getEmployee,
  getEmployees,
  addEmployee,
  updateEmployee,
  delEmployee,
} from "../controllers/employees.controller.js";

/**
 * Instance Router
 */
const router = Router();

/**
 * Create route for GET request on /employees
 */
router.get("/employees", getEmployees);

/**
 * Create route for GET request
 */
router.get("/employees/:id", getEmployee);

/**
 * Create route for POST request on /employees
 */
router.post("/employees", addEmployee);

/**
 * Create route for PATCH request on /employees
 */
router.patch("/employees/:id", updateEmployee);

/**
 * Create route for DELETE request on /employees
 */
router.delete("/employees/:id", delEmployee);

export default router;
