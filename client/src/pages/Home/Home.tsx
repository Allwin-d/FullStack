import { useQuery } from "@tanstack/react-query";
import { GET_ALL_MOVIES } from "../../url/url";
import axios from "axios";
import type { movieDataType } from "../Home/home.types";

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
    enabled: !!API_URL,
  });

  if (isError) {
    return <h1>Failed to fetch Data</h1>;
  }

  if (isLoading) {
    return <h1>Loading Data...</h1>;
  }

  return (
    <div>
      {data?.data.map((item) => (
        <div>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Home;
