import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";

import connectToDb from "./Db/db.js";
import router from "./routes/MovieRoutes.js";

// Create __dirname manually for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Port number imported from .env
const PORT = process.env.PORT || 3000;

// Creation of Express Application
const app = express();

// Setting EJS as the template engine
app.set("view engine", "ejs");

// Telling Express where the views folder exists
app.set("views", path.join(__dirname, "views"));

// JSON Parser Middleware
// Express cannot directly understand req.body
// This middleware converts JSON body into JavaScript object
app.use(express.json());

// DB Connection
connectToDb();

// Logger Middleware
// This middleware runs for every request
app.use("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("Ip Address :", req.ip);
  console.log("Path :", req.path);
  console.log("Method :", req.method);

  // next() moves the request to the next middleware/route
  next();
});

//This is for the Movie Router
app.use("/api/movies", router);

// Server Listening
app.listen(PORT, () => {
  console.log(`Server successfully running on PORT ${PORT}`);
});
