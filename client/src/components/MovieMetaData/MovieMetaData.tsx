import { MINS } from "../../constants/constantVariables";
import type { movieMetaDataTypes } from "./movieMetaData.types";

const MovieMetaData = ({
  releaseYear,
  language,
  director,
  duration,
}: movieMetaDataTypes) => {
  return (
    <div className="flex flex-row space-x-8 text-gray-200 font-medium text-3xl">
      <p className="">{releaseYear}</p>
      <p>{language}</p>
      <p>{director}</p>
      <p>
        {duration}
        {MINS}
      </p>
    </div>
  );
};

export default MovieMetaData;
