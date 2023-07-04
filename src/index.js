import app from "./app.js";
import { PORT } from "./config.js";

/**
 * Select port of server
 */
app.listen(PORT);
console.log("Server run on port " + PORT);
