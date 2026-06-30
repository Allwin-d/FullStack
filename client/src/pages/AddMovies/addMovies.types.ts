export type movieDetailsTypes = {
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

export type responseDataType = {
  success: boolean;
  message: string;
  data: movieDetailsTypes & {
    _id: string;
    __v: number;
  };
};
