import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

import connectToDb from "./Db/db.js";
import movieRouter from "./routes/MovieRoutes.js";
import authRouter from "./routes/authRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

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

app.use(
  cors({
    origin: "http://localhost:5173", // React/Vite frontend
    credentials: true,
  }),
);
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
app.use("/api/movies", movieRouter);

//Auth router
app.use("/api/auth", authRouter);

//image upload router
app.use("/api/image", imageRouter);

// Server Listening
app.listen(PORT, () => {
  console.log(`Server successfully running on PORT ${PORT}`);
});
