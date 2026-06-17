import { useQuery } from "@tanstack/react-query";
import { GET_SPECIFIC_MOVIE } from "../../url/url";
import { useParams } from "react-router-dom";
import axios from "axios";
import type { movieDataType } from "../MovieDetail/movieDetail.types";
import {
  DURATIION,
  FAILED_LOADING_DATA,
  LOADING_DATA,
  MINS,
  RATING,
  RELEASE_YEAR,
} from "../../constants/constantVariables";
import Genre from "../../components/Genre/Genre";
import { IoStar } from "react-icons/io5";
import { MdTimer } from "react-icons/md";
import { FaCut } from "react-icons/fa";
import Synopsis from "../../components/Synopsis/Synopsis";
import Cast from "../../components/Cast/Cast";

const MovieDetail = () => {
  const { id } = useParams();

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
      <div className="flex flex-row justify-start items-center space-x-10 p-12 bg-gradient-to-r from-purple-900 to-orange-800 ">
        {/* Left side section */}
        <img
          src={data?.image}
          alt={data?.title}
          className="w-96 h-auto object-cover rounded-lg"
        />
        {/* Right side section */}
        <div className="flex flex-col space-y-14">
          <p className="text-white text-4xl font-bold">{data?.title}</p>
          <div className="flex flex-row space-x-4 text-gray-200 font-medium text-lg">
            <p className="">{data?.releaseYear}</p>
            <p>{data?.language}</p>
            <p>{data?.director}</p>
            <p>
              {data?.duration}
              {MINS}
            </p>
          </div>
          <Genre genre={data?.genre ?? []} />
          <p className="px-8 py-4 bg-yellow-500 w-1/2 rounded-lg border-yellow-700 border-4 text-yellow-950 font-semibold text-lg">
            {data?.rating} / 10
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center space-x-80 p-12">
        <div className="flex flex-col items-center justify-center px-48 py-10 bg-yellow-200 rounded-lg space-y-2">
          <IoStar className="text-yellow-600 text-3xl " />
          <p className="text-yellow-700 font-bold text-32xl ">{data?.rating}</p>
          <p className="text-yellow-700 font-semibold text-base ">{RATING}</p>
        </div>
        <div className="flex flex-col items-center justify-center px-48 py-10 bg-blue-200 rounded-lg space-y-2">
          <MdTimer className="text-blue-600 text-3xl" />
          <p className="text-blue-700 font-bold text-3xl ">{data?.duration}</p>
          <p className="text-blue-700 font-semibold text-base ">{DURATIION}</p>
        </div>
        <div className="flex flex-col items-center justify-center px-48 py-10 bg-green-200 rounded-lg space-y-2">
          <FaCut className="text-green-700 text-3xl" />
          <p className="text-green-700 font-bold text-3xl">
            {data?.releaseYear}
          </p>
          <p className="text-green-700 font-semibold text-base">
            {RELEASE_YEAR}
          </p>
        </div>
      </div>
      {/* Cast Section */}
      <Cast cast={data?.cast ?? []} />
      {/* Synopsis Section */}
      <Synopsis synopsis={data?.synopsis ?? ""} />
    </div>
  );
};

export default MovieDetail;
