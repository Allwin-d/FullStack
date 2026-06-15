import { useQuery } from "@tanstack/react-query";
import { GET_SPECIFIC_MOVIE } from "../../url/url";
import { useParams } from "react-router-dom";
import axios from "axios";
import type { movieDataType } from "../MovieDetail/movieDetail.types";
import { MINS } from "../../constants/constantVariables";
import Genre from "../../components/Genre/Genre";

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
    <div className="w-full min-h-screen bg-red-500">
      <div className="flex flex-row justify-start items-center space-x-10 p-12">
        <img
          src={data?.image}
          alt={data?.title}
          className="w-96 h-auto object-cover"
        />
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
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
