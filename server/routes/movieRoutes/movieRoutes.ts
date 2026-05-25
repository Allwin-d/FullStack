import express from "express";
import {
  addNewMovie,
  getHome,
  getSingleMovie,
} from "../../controller/movieController/movieController";
import { getAllMovies } from "../../controller/movieController/movieController";

const router = express.Router(); //creation of router

router.get("/", getHome); //getHome is the callback function
router.get("/allMovies", getAllMovies); //getAllMovies is the callback function
router.get("/singleMovie/:id", getSingleMovie);
router.post("/addNewMovie", addNewMovie);

export default router;
