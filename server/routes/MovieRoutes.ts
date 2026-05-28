import express from "express";
import {
  createMovie,
  getMovies,
  deleteMovie,
} from "../controller/MovieController.js";

const router = express.Router();

router.post("/", createMovie);
router.get("/", getMovies);
router.delete("/:id", deleteMovie);

export default router;
