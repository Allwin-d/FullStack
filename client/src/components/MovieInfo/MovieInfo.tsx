import { MINS } from "../../constants/constantVariables";
import type { MovieInfoType } from "./movieInfo.types";
import Genre from "../Genre/Genre";

const MovieInfo = ({
  title,
  releaseYear,
  director,
  duration,
  genre,
}: MovieInfoType) => {
  return (
    <div className="flex flex-col space-y-6 ">
      <p className="font-medium text-2xl cursor-pointer">{title}</p>
      <div className="flex flex-row space-x-2 font-sm text-xl">
        <p>{releaseYear}</p>
        <p>{director}</p>
        <div className="flex flex-row space-x-6">
          {duration}
          {MINS}
        </div>
      </div>
    <Genre genre ={genre} />
    </div>
  );
};

export default MovieInfo;
