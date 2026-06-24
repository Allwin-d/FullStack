import { useQuery } from "@tanstack/react-query";
import { GET_SPECIFIC_MOVIE } from "../../url/url";
import { useParams } from "react-router-dom";
import axios from "axios";
import type { movieDataType } from "../MovieDetail/movieDetail.types";
import {
  FAILED_LOADING_DATA,
  LOADING_DATA,
} from "../../constants/constantVariables";
import MovieGenre from "../../components/MovieGenre/MovieGenre";
import Synopsis from "../../components/Synopsis/Synopsis";
import Cast from "../../components/Cast/Cast";
import MovieStatistics from "../../components/MovieStatistics/MovieStatistics";
import MovieMetaData from "../../components/MovieMetaData/MovieMetaData";
import Image from "../../components/Image/Image";
import Header from "../../components/Header/Header";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import type { payloadType } from "../../hooks/useAuth.types";

const MovieDetail = () => {
  const { id } = useParams();
  const token = useAuth() as payloadType;

  const fetchSingleMovie = async () => {
    const response = await axios.get<movieDataType>(
      `${GET_SPECIFIC_MOVIE}/${id}`,
    );

    return response.data.data; // return only movie object
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["singleMovie", id],
    queryFn: fetchSingleMovie,
    enabled: !!id,
  });

  if (isLoading) {
    return <div>{LOADING_DATA}</div>;
  }

  if (isError) {
    return <div>{FAILED_LOADING_DATA}</div>;
  }

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-row justify-start items-center space-x-10 p-12 bg-gradient-to-r from-purple-900 to-orange-800 ">
        <Image
          source={data?.image ?? ""}
          alt={data?.title ?? ""}
          width="w-72"
          height="h-2/4"
          object="object-fill"
          rounded="rounded-lg"
        />

        <div className="flex justify-between items-center w-full">
          {/* Left Side section */}
          <div className="flex flex-col space-y-14">
            <p className="text-white text-4xl font-bold">{data?.title}</p>
            <MovieMetaData
              releaseYear={data?.releaseYear ?? 0}
              language={data?.language ?? ""}
              director={data?.director ?? ""}
              duration={data?.duration ?? 0}
            />
            <MovieGenre genre={data?.genre ?? []} />
            <p className="px-8 py-4 bg-yellow-500 w-1/3 rounded-lg border-yellow-700 border-4 text-yellow-950 font-semibold text-2xl text-center">
              {data?.rating} / 10
            </p>
          </div>
          {/* Right Side Section */}
          <div className="flex space-x-20 font-bold text-6xl ">
            <FaEdit
              className={`cursor-pointer text-white transition duration-200 hover:scale-125 ${token.role === "User" ? "hidden" : "visible"}`}
            />
            <FaTrashAlt
              className={`cursor-pointer text-white transition duration-200 hover:scale-125 ${token.role === "User" ? "hidden" : "visible"}`}
            />
          </div>
        </div>
      </div>
      {/* Movie Statistics Section */}
      <MovieStatistics
        rating={data?.rating ?? 0}
        duration={data?.duration ?? 0}
        releaseYear={data?.releaseYear ?? 0}
      />
      {/* Cast Section */}
      <Cast cast={data?.cast ?? []} />
      {/* Synopsis Section */}
      <Synopsis synopsis={data?.synopsis ?? ""} />
    </div>
  );
};

export default MovieDetail;
