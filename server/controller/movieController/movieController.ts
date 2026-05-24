import { Request, Response } from "express";

const Movies = [
  {
    id: 1,
    movie: "Intersteller",
  },
  {
    id: 2,
    movie: "Inception",
  },
  {
    id: 3,
    movie: "Dunkirk",
  },
  {
    id: 4,
    movie: "Uthama Villain",
  },
  {
    id: 5,
    movie: "Guru",
  },
];

const getHome = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to the Movie Management Application",
  });
};

const getAllMovies = (req: Request, res: Response) => {
  res.status(200).json(Movies);
};

const getSingleMovie = (req: Request, res: Response) => {
  const Movie = Movies.find((item) => item.id === Number(req.params.id));
  if (Movie) {
    res.status(200).json(Movie);
  } else {
    res.status(404).send({
      message: "Movie Not Found , Try Searching Available Movie ID",
    });
  }
};

export { getHome, getAllMovies, getSingleMovie };
