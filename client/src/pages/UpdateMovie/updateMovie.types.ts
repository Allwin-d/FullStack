// editMovie.types.ts

export type EditMovieFormType = {
  title: string;
  director: string;
  language: string;
  releaseYear: number | null;
  genre: string[];
  cast: string[];
  rating: number | null;
  duration: number | null;
  synopsis: string;
  image: string;
};

export type EditMovieResponseType = {
  success: boolean;
  message: string;
  data: EditMovieFormType & {
    _id: string;
    createdAt: string;
    updatedAt: string;
  };
};
