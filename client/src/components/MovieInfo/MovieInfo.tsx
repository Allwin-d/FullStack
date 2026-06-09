import { MINS } from "../../constants/constantVariables";
import type { MovieInfoType } from "./movieInfo.types";

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
      <div className="flex flex-row space-x-4 text-xl">
        {genre.map((genre, id) => (
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
  );
};

export default MovieInfo;
