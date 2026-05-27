import express from "express";
import { Request, Response } from "express";
import path from "path";
import mongoose from "mongoose";

//Connection between Node.js application and MongoDB Atlas Database
mongoose
  .connect(
    "mongodb+srv://AllwinSelva:AllwinSelva7@cluster0.wrlejny.mongodb.net/",
  )

  //If database connection is successful
  .then(() => console.log("Database Connected Successfully"))

  //If database connection fails
  .catch((err) => console.log(err));

const PORT = 3000;

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

// Logger Middleware
//This middleware runs for every request
app.use("/", (req: Request, res: Response, next) => {
  console.log("Ip Address : ", req.ip);
  console.log("path : ", req.path);
  console.log("Method: ", req.method);

  //next() moves the request to the next middleware/route
  next();
});

//Router Middleware
//These routers handle separate route modules

//Server Listening
app.listen(PORT, () => {
  console.log(`Server successfully running on PORT ${PORT}`);
});
