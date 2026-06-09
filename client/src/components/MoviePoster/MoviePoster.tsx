import { useNavigate } from "react-router-dom";
import type { MoviePosterType } from "./moviePoster.types";

const MoviePoster = ({ id, image, title }: MoviePosterType) => {
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/movieDetail/${id}`);
  };

  return (
    <div>
      <img
        src={image}
        alt={title}
        className="w-40 h-50 rounded-lg shadow-md shadow-gray-400 transition duration-150 hover:scale-105 cursor-pointer "
        onClick={() => handleNavigate(id)}
      />
    </div>
  );
};

export default MoviePoster;
