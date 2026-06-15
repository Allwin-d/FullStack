import { useQuery } from "@tanstack/react-query";
import { GET_ALL_MOVIES } from "../../url/url";
import axios from "axios";
import type { movieDataType } from "../Home/home.types";
import {
  FAILED_LOADING_DATA,
  LOADING_DATA,
} from "../../constants/constantVariables";
import MovieTile from "../../components/MovieTile/MovieTile";
const Home = () => {
  const API_URL = GET_ALL_MOVIES;
  console.log("This is the api url for Get All Movies : ", API_URL);

  const getAllMovies = async () => {
    const data = await axios.get<movieDataType>(API_URL);
    console.log("All Movie Data : ", data);
    return data.data;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["Movies"],
    queryFn: getAllMovies,
    enabled: !!API_URL, //the query fn gets called only if the (API_URL) available
  });

  if (isError) {
    return (
      <div className="min-h-screen w-full text-red-700 text-5xl font-medium">
        <p>{FAILED_LOADING_DATA}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen w-full text-blue-700 text-5xl font-medium">
        <p>{LOADING_DATA}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full ">
      <div className="flex flex-col space-y-10  p-12 bg-gray-100">
        {data?.data.map((movie) => (
          <MovieTile
            id ={movie._id}
            image={movie.image}
            title={movie.title}
            releaseYear={movie.releaseYear}
            director={movie.director}
            duration={movie.duration}
            genre={movie.genre}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
