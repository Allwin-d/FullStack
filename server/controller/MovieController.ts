import { Request, Response } from "express";
import Movie from "../models/MovieModel.js";

//CREATE a new movie
const createMovie = async (req: Request, res: Response) => {
  try {
    const movieDetails = await Movie.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Movie created successfully",
      data: movieDetails,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to create movie",
      error: err instanceof Error ? err.message : "Unknown Error",
    });
  }
};

//GET single Movie by ID
const getSingleMovieById = async (req: Request, res: Response) => {
  try {
    const singleMovie = await Movie.findById(req.params.id);
    if (!singleMovie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Single movie fetched successfully",
      data: singleMovie,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch single Movie",
      error: err instanceof Error ? err.message : "Unknown Error",
    });
  }
};

//GET all the movies
const getMovies = async (req: Request, res: Response) => {
  try {
    const allMovieData = await Movie.find({}); //it gets all the documents
    return res.status(200).json({
      success: true,
      message: "Fetched all movie data",
      totalMovies: allMovieData.length,
      data: allMovieData,
    });
  } catch (err) {
    return res.status(500).json({
      //when the resource not found we use this status code
      success: false,
      message: "Failed to fetch the Movie data",
      error: err instanceof Error ? err.message : "Unknown Error",
    });
  }
};

//UPDATE a movie
const updateMovie = async (req: Request, res: Response) => {
  try {
    const movieData = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!movieData) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Movie updated successfully",
      data: movieData,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to update movie",
      error: err instanceof Error ? err.message : "Unknown error",
    });
  }
};

//DELETE a movie
const deleteMovie = async (req: Request, res: Response) => {
  try {
    const movieData = await Movie.findByIdAndDelete(req.params.id);

    if (!movieData) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Movie deleted successfully",
      data: movieData,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete movie",
      error: err instanceof Error ? err.message : "Unknown Error",
    });
  }
};

export { createMovie, getSingleMovieById, getMovies, updateMovie, deleteMovie };
