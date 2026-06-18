import { IoStar } from "react-icons/io5";
import { MdTimer } from "react-icons/md";
import { FaCut } from "react-icons/fa";
import {
  RELEASE_YEAR,
  RATING,
  DURATIION,
} from "../../constants/constantVariables";
import type { MovieStatisticsTypes } from "./movieStatistics.types";

const MovieStatistics = ({
  rating,
  duration,
  releaseYear,
}: MovieStatisticsTypes) => {
  return (
    <div className="flex flex-row justify-center items-center space-x-80 p-12">
      <div className="flex flex-col items-center justify-center px-48 py-10 bg-yellow-200 rounded-lg space-y-2">
        <IoStar className="text-yellow-600 text-3xl " />
        <p className="text-yellow-700 font-bold text-3xl ">{rating}</p>
        <p className="text-yellow-700 font-semibold text-base ">{RATING}</p>
      </div>
      <div className="flex flex-col items-center justify-center px-48 py-10 bg-blue-200 rounded-lg space-y-2">
        <MdTimer className="text-blue-600 text-3xl" />
        <p className="text-blue-700 font-bold text-3xl ">{duration}</p>
        <p className="text-blue-700 font-semibold text-base ">{DURATIION}</p>
      </div>
      <div className="flex flex-col items-center justify-center px-48 py-10 bg-green-200 rounded-lg space-y-2">
        <FaCut className="text-green-700 text-3xl" />
        <p className="text-green-700 font-bold text-3xl">{releaseYear}</p>
        <p className="text-green-700 font-semibold text-base">{RELEASE_YEAR}</p>
      </div>
    </div>
  );
};

export default MovieStatistics;
