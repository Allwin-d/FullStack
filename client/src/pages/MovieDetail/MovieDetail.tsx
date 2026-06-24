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
      <Header />
      <div className="flex flex-row justify-start items-center space-x-10 p-12 bg-gradient-to-r from-purple-900 to-orange-800 ">
        {/* Left side section */}
        {/* <img
          src={data?.image}
          alt={data?.title}
          className="w-72 h-2/4 object-fill rounded-lg"
        /> */}
        <Image
          source={data?.image ?? ""}
          alt={data?.title ?? ""}
          width="w-72"
          height="h-2/4"
          object="object-fill"
          rounded="rounded-lg"
        />

        {/* Right side section */}
        <div className="flex flex-col space-y-14">
          <p className="text-white text-4xl font-bold">{data?.title}</p>
          <MovieMetaData
            releaseYear={data?.releaseYear ?? 0}
            language={data?.language ?? ""}
            director={data?.director ?? ""}
            duration={data?.duration ?? 0}
          />
          <MovieGenre genre={data?.genre ?? []} />
          <p className="px-8 py-4 bg-yellow-500 w-1/2 rounded-lg border-yellow-700 border-4 text-yellow-950 font-semibold text-lg">
            {data?.rating} / 10
          </p>
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
