import { useQuery } from "@tanstack/react-query";
import { GET_ALL_MOVIES } from "../../url/url";
import axios from "axios";
import type { movieDataType } from "../Home/home.types";
import Header from "../../components/Header";

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
    return <h1>Failed to fetch Data</h1>;
  }

  if (isLoading) {
    return <h1>Loading Data...</h1>;
  }

  return (
    <div className="min-h-screen w-full ">
      <Header />
      {data?.data.map((item) => (
        <div className="">
          <h1 className="">{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Home;
