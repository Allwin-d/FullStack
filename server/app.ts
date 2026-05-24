import express from "express";
import UserRouter from "./routes/userRoutes/userRoute";
import ProductRouter from "./routes/productRoutes/productRoutes";

const PORT = 3000;
const app = express(); //Express application is created here

app.set("view engine", "ejs");
app.use("/", UserRouter); //Endpoint for the user Route , and UserRouter is the Router Middleware
app.use("/", ProductRouter);

app.listen(PORT, () => {
  console.log(`Server successfully running on PORT ${PORT}`);
});
