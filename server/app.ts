import express from "express";
import movieRouter from "./routes/movieRoutes/movieRoutes";
import UserRouter from "./routes/userRoutes/userRoute";
import ProductRouter from "./routes/productRoutes/productRoutes";
import { Request, Response } from "express";
import path from "path";

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json()); //Acts as a JSON parse Middleware , since Express can't direactly parse the req.body

app.use("/", (req: Request, res: Response, next) => {
  console.log("Ip Address : ", req.ip);
  console.log("path : ", req.path);
  console.log("Method: ", req.method);
  next();
});

app.use("/", UserRouter);
app.use("/", ProductRouter);
app.use("/", movieRouter);

app.listen(PORT, () => {
  console.log(`Server successfully running on PORT ${PORT}`);
});
