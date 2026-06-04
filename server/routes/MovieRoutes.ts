import express, { Router } from "express";
import {
  createMovie,
  getMovies,
  deleteMovie,
  updateMovie,
  getSingleMovieById,
} from "../controller/MovieController.js";

const router = express.Router();

router.post("/", createMovie);
router.get("/:id", getSingleMovieById);
router.get("/", getMovies);
router.delete("/:id", deleteMovie);
router.put("/:id", updateMovie);

export default router;
