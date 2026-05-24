import express from "express";
import movieRouter from "./routes/movieRoutes/movieRoutes";
import UserRouter from "./routes/userRoutes/userRoute";
import ProductRouter from "./routes/productRoutes/productRoutes";
import { Request, Response } from "express";
import path from "path";

const PORT = 3000;
const app = express(); //Express application is created here

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//This Middleware is always gonna run , because there is no condition for this middleware
app.use("/", (req: Request, res: Response, next) => {
  console.log("Ip Address : ", req.ip);
  console.log("path : ", req.path);
  console.log("Method: ", req.method);
  next();
});
app.use("/", UserRouter); //Endpoint for the user Route , and UserRouter is the Router Middleware
app.use("/", ProductRouter);

//Routes for the movie recommendation
app.use("/", movieRouter);

app.listen(PORT, () => {
  console.log(`Server successfully running on PORT ${PORT}`);
});

//NOTE : If we send the response then there is nothing gonna execute after that
