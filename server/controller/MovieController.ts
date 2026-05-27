import { Request, Response } from "express";
import Movie from "../models/MovieModel.js";

const createMovie = async (req: Request, res: Response) => {
  try {
    console.log("Movie Details : ", req.body);
    const movieDetails = await Movie.create(req.body);
    res.status(201).json({
      success: true,
      message: "Movie created successfully",
      data: movieDetails,
    });
  } catch (err) {
    console.log("Failed to create movie :", err);
    res.status(500).json({
      success: false,
      message: "Failed to create movie",
      error: err instanceof Error ? err.message : "Unknown Error",
    });
  }
};

export { createMovie };
