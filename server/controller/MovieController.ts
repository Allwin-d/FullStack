import { Request, Response } from "express";
import Movie from "../models/MovieModel.js";

const createMovie = async (req: Request, res: Response) => {
  try {
    const movieDetails = await Movie.create(req.body);
    res.status(201).json({
      success: true,
      message: "Movie created successfully",
      data: movieDetails,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create movie",
      error: err instanceof Error ? err.message : "Unknown Error",
    });
  }
};

const getMovies = async (req: Request, res: Response) => {
  try {
    const allMovieData = await Movie.find({});
    res.status(200).json({
      success: true,
      message: "Fetched all movie data",
      data: allMovieData,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Failed to fetch the Movie data",
      error: err instanceof Error ? err.message : "Unknown Error",
    });
  }
};

export { createMovie, getMovies };
