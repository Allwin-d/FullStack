import { Request, Response } from "express";
import Movie from "../models/MovieModel.js";
import mongoose from "mongoose";

interface MovieParams {
  id: string;
}

//CREATE a new movie
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

//GET all the movies
const getMovies = async (req: Request, res: Response) => {
  try {
    const allMovieData = await Movie.find({}); //it gets all the documents
    res.status(200).json({
      success: true,
      message: "Fetched all movie data",
      data: allMovieData,
    });
  } catch (err) {
    res.status(404).json({
      //when the resource not found we use this status code
      success: false,
      message: "Failed to fetch the Movie data",
      error: err instanceof Error ? err.message : "Unknown Error",
    });
  }
};

//DELETE a movie
const deleteMovie = async (req: Request, res: Response) => {
  try {
    const movieData = await Movie.findByIdAndDelete(req.params.id);

    if (!movieData) {
      res.status(404).json({
        success: false,
        messsage: "Movie not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Movie deleted successfully",
      data: movieData,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete movie",
      error: err instanceof Error ? err.message : "Unkown Error",
    });
  }
};

export { createMovie, getMovies, deleteMovie };
