import express from "express";
import movieRouter from "./routes/movieRoutes/movieRoutes";
import UserRouter from "./routes/userRoutes/userRoute";
import ProductRouter from "./routes/productRoutes/productRoutes";
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

// User Schema
//Schema defines the structure/rules of the data
const userSchema = new mongoose.Schema({
  username: {
    type: String, //username should be string
    required: true, //mandatory field
  },

  email: {
    type: String,
    required: true,

    //duplicate email values are not allowed
    unique: true,
  },

  age: {
    type: Number,
    required: true,
  },
});

// User Model
//Model provides methods for CRUD operations
//Using this model we can interact with MongoDB
const User = mongoose.model("User", userSchema);

// CREATE USER WITH STATIC DATA
app.post("/createStaticUser", async (req: Request, res: Response) => {
  try {
    //Creating a new document inside MongoDB
    const newUser = await User.create({
      username: "Allwin",
      email: "allwin@gmail.com",
      age: 23,
    });

    //201 = Resource Created Successfully
    res.status(201).json({
      message: "Static User Created Successfully",
      data: newUser,
    });
  } catch (error) {
    //500 = Internal Server Error
    res.status(500).json({
      message: "Failed to create user",
    });
  }
});

// GET ALL USERS
app.get("/allUsers", async (req: Request, res: Response) => {
  try {
    //Fetching all documents from MongoDB
    const users = await User.find();

    //200 = Success
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users",
    });
  }
});

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
app.use("/", UserRouter);
app.use("/", ProductRouter);
app.use("/", movieRouter);

//Server Listening
app.listen(PORT, () => {
  console.log(`Server successfully running on PORT ${PORT}`);
});