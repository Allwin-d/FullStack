import express from "express";
import { createMovie } from "../controller/MovieController.js";

const router = express.Router();

router.get("/api/movies", createMovie);

export default router;
