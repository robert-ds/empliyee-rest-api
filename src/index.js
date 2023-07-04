/**
 * Import express
 */
import express from "express";

/**
 * Create connection of db and use it
 */
import { pool } from "./db.js";

/**
 * Create a new express app
 */
const app = express();

/**
 * Test connection of database
 */
app.get("/ping", async (req, res) => {
  const [result] = await pool.query("SELECT 1 + 1 AS employees");
  res.json(result[0]);
});

/**
 * Create route for GET request on /employees
 */
app.get("/employees", (req, res) => {
  res.send("All employess");
});

/**
 * Create route for POST request on /employees
 */
app.post("/employees", (req, res) => {
  res.send("Creating employee");
});

/**
 * Create route for PATCH request on /employees
 */
app.patch("/employees/:id", (req, res) => {
  res.send("Updating employee ");
});

/**
 * Create route for DELETE request on /employees
 */
app.delete("/employees/:id", (req, res) => {
  res.send("Deleting Employee ");
});

/**
 * Select port of server
 */
app.listen(3000);
console.log("Server run on port 3000");
