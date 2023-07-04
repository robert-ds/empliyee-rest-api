import { pool } from "../db.js"; // Import connection to database

/**
 *  Get alls employees method
 */
export const getEmployees = async (req, res) => {
  const [allUsers] = await pool.query("SELECT * FROM employees");
  res.json(allUsers);
};

/**
 * Create a new employee method
 */
export const addEmployee = async (req, res) => {
  const { name, salary } = req.body; // Get name and salary from body of req
  const [newUser] = await pool.query(
    "INSERT INTO employees (name, salary) VALUES (?, ?)",
    [name, salary]
  );
  res.send({
    id: newUser.insertId,
    name,
    salary,
  });
};

/**
 * Update a employee method
 */
export const updateEmployee = (req, res) => {
  res.send("Updating employee ");
};

/**
 * Delete a employee method
 */
export const delEmployee = (req, res) => {
  res.send("Deleting Employee ");
};
