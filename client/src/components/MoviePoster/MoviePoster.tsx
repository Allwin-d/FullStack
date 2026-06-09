import type { MoviePosterType } from "./moviePoster.types";

const MoviePoster = ({ image, title }: MoviePosterType) => {
  return (
    <div>
      <img
        src={image}
        alt={title}
        className="w-40 h-50 rounded-lg shadow-md shadow-gray-400 transition duration-150 hover:scale-105 cursor-pointer "
      />
    </div>
  );
};

export default MoviePoster;
