import express from "express";
import {
  createMovie,
  getMovies,
  deleteMovie,
  updateMovie,
} from "../controller/MovieController.js";

const router = express.Router();

router.post("/", createMovie);
router.get("/", getMovies);
router.delete("/:id", deleteMovie);
router.put("/:id", updateMovie);

export default router;
