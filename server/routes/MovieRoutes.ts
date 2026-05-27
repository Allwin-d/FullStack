import express from "express";
import { createMovie } from "../controller/MovieController.js";
import { getMovies } from "../controller/MovieController.js";

const router = express.Router();

router.post("/api/movies", createMovie);
router.get("/api/movies", getMovies);

export default router;
