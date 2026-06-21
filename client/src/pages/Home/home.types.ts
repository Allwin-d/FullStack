export type movieDataType = {
  success: boolean;
  message: string;
  data: singleMovie[];
};

export type singleMovie = {
  _id: string;
  title: string;
  image: string;
  genre: string[];
  language: string;
  releaseYear: number;
  rating: number;
  cast: string[];
  director: string[];
  duration: number;
  synopsis: string;
  __v: number;
};

