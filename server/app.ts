import express from "express";
import { Request, Response } from "express";
import path from "path";
import connectToDb from "./Db/db";

//Port number imported from .env
const PORT = process.env.PORT;

//Creation of Express Application
const app = express();

//Setting EJS as the template engine
app.set("view engine", "ejs");

//Telling Express where the views folder exists
app.set("views", path.join(__dirname, "views"));

//JSON Parser Middleware
//Express cannot directly understand req.body
//This middleware converts JSON body into JavaScript object
app.use(express.json());

//DB Connection
connectToDb();

// Logger Middleware
//This middleware runs for every request
app.use("/", (req: Request, res: Response, next) => {
  console.log("Ip Address : ", req.ip);
  console.log("path : ", req.path);
  console.log("Method: ", req.method);

  //next() moves the request to the next middleware/route
  next();
});

//Server Listening
app.listen(PORT, () => {
  console.log(`Server successfully running on PORT ${PORT}`);
});
