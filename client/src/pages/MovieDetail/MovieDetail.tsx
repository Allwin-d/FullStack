import { useQuery } from "@tanstack/react-query";
import { GET_SPECIFIC_MOVIE } from "../../url/url";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();
  console.log("Movie ID : ", id);

  const API_URL = GET_SPECIFIC_MOVIE;

  const fetchSingleMovie = async () => {
    const response = await axios.get(`${API_URL}/${id}`);
    console.log(response.data);
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["singleMovie"],
    queryFn: fetchSingleMovie,
    enabled: !!API_URL,
  });

  console.log(data, isError, isLoading);

  return <div></div>;
};

export default MovieDetail;
