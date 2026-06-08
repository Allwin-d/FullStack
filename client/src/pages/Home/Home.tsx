import { useQuery } from "@tanstack/react-query";
import { GET_ALL_MOVIES } from "../../url/url";
import axios from "axios";
import type { movieDataType } from "../Home/home.types";
import Header from "../../components/Header";
import {
  FAILED_LOADING_DATA,
  LOADING_DATA,
  MINS,
} from "../../constants/constantVariables";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

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
      <Header />
      <div className="flex flex-col space-y-10  p-12 bg-gray-100">
        {data?.data.map((movie) => (
          <div className="flex flex-row items-center justify-between shadow-md p-4 transition-all duration-150 hover:shadow-xl">
            {/* Left side section */}
            <div className="flex flex-row space-x-20 items-center">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-40 h-50 rounded-lg shadow-md shadow-gray-400 transition duration-150 hover:scale-105 cursor-pointer "
              />
              <div className="flex flex-col space-y-6 ">
                <p className="font-medium text-2xl cursor-pointer">
                  {movie.title}
                </p>
                <div className="flex flex-row space-x-2 font-sm text-xl">
                  <p>{movie.releaseYear}</p>
                  <p>{movie.director}</p>
                  <div className="flex flex-row space-x-6">
                    {movie.duration}
                    {MINS}
                  </div>
                </div>
                <div className="flex flex-row space-x-4 text-xl">
                  {movie.genre.map((genre, id) => (
                    <p
                      className={`${
                        id === 1
                          ? "bg-red-300 text-red-700"
                          : id === 2
                            ? "bg-blue-300 text-blue-700"
                            : "bg-green-300 text-green-700"
                      } rounded-3xl px-3 font-medium`}
                    >
                      {genre}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* This is for the Right Side Section */}
            <div className="flex flex-row space-x-20 font-bold text-4xl">
              <p className="cursor-pointer">⭐{movie.rating}</p>
              <FaEye className="cursor-pointer" />
              <FaEdit className="cursor-pointer" />
              <FaTrashAlt className="cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
