import { useQuery } from "@tanstack/react-query";
import { GET_SPECIFIC_MOVIE } from "../../url/url";
import { useParams } from "react-router-dom";
import axios from "axios";
import type { movieDataType } from "../MovieDetail/movieDetail.types";
import { MINS } from "../../constants/constantVariables";
import Genre from "../../components/Genre/Genre";
import { CiUser } from "react-icons/ci";

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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading movie</div>;
  }

  return (
    <div className="w-full min-h-screen bg-red-200">
      <div className="flex flex-row justify-start items-center space-x-10 p-12">
        {/* Left side section */}
        <img
          src={data?.image}
          alt={data?.title}
          className="w-96 h-auto object-cover rounded-lg"
        />
        {/* Right side section */}
        <div className="flex flex-col space-y-14">
          <p>{data?.title}</p>
          <div className="flex flex-row space-x-4">
            <p>{data?.releaseYear}</p>
            <p>{data?.language}</p>
            <p>{data?.director}</p>
            <p>
              {data?.duration}
              {MINS}
            </p>
          </div>
          <Genre genre={data?.genre ?? []} />
          <p>{data?.rating} / 10</p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center space-x-80 p-12">
        <div className="flex flex-col items-center justify-center px-48 py-10 bg-blue-600 rounded-lg">
          <p className="">{data?.rating}</p>
          <p>Rating</p>
        </div>
        <div className="flex flex-col items-center justify-center px-48 py-10 bg-blue-600 rounded-lg">
          <p className="">{data?.duration}</p>
          <p>Duration</p>
        </div>
        <div className="flex flex-col items-center justify-center px-48 py-10 bg-blue-600 rounded-lg">
          <p className="">{data?.releaseYear}</p>
          <p>Release Year</p>
        </div>
      </div>
      {/* Cast Section */}
      <div className="p-12 flex flex-col space-y-4">
        <h1>Cast</h1>
        <div className="flex flex-row space-x-36 items-center justify-start">
          {data?.cast.map((person) => (
            <div className="flex flex-row items-center justify-center space-x-2">
              <CiUser />
              <p>{person}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Synopsis Section */}
      <div className="p-12 flex flex-col space-y-4">
        <h1>Synopsis</h1>
        <div className="">{data?.synopsis}</div>
      </div>
    </div>
  );
};

export default MovieDetail;
