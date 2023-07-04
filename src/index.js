import express from "express"; // Import express
import employeesRoutes from "./routes/employees.routes.js"; // Import routes
import indexRoutes from "./routes/index.routes.js"; // Import test connection to database

/**
 * Create a new express app
 */
const app = express();

/**
 * Use index routes to test database connection
 */
app.use(indexRoutes);

/**
 * Use employees routes
 */
app.use(employeesRoutes);

/**
 * Select port of server
 */
app.listen(3000);
console.log("Server run on port 3000");
