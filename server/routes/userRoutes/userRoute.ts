import express from "express";
import getUser from "../../controller/userController/userController";

const router = express.Router(); //creates a router instance 

router.get("/", getUser); //here getUser is the callback function 

export default router;
