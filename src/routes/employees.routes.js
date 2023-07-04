import { Router } from "express"; // Import Router to express

/**
 * Instance Router
 */
const router = Router();

/**
 * Create route for GET request on /employees
 */
router.get("/employees", (req, res) => {
  res.send("All employess");
});

/**
 * Create route for POST request on /employees
 */
router.post("/employees", (req, res) => {
  res.send("Creating employee");
});

/**
 * Create route for PATCH request on /employees
 */
router.patch("/employees/:id", (req, res) => {
  res.send("Updating employee ");
});

/**
 * Create route for DELETE request on /employees
 */
router.delete("/employees/:id", (req, res) => {
  res.send("Deleting Employee ");
});

export default router;
