import express from "express";
import { loginUser, registerUser } from "../controller/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import { AdminUser } from "../controller/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/welcomeAdmin", authMiddleware, adminMiddleware, AdminUser);

export default router;
