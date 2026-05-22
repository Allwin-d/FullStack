import express from "express";
import UserRouter from "./routes/userRoutes/userRoute";

const PORT = 3000;
const app = express(); //Express application is created here 

app.set("view engine", "ejs");
app.use("/user", UserRouter);  //Endpoint for the user Route , and UserRouter is the Router Middleware

app.listen(PORT, () => {
  console.log(`Server successfully running on PORT ${PORT}`);
});
