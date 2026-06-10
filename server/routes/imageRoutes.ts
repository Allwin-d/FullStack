import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import { AdminUser } from "../controller/authController.js";
import upload from "../middleware/uploadMiddleware.js";
import imageController from "../controller/imageController.js";

const router = express.Router();

router.post(
  "/uploads",
  authMiddleware,
  adminMiddleware,
  upload.single("image"), //fileName (image) is sent from the frontend 
  imageController,
);

export default router;