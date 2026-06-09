import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { MINS } from "../../constants/constantVariables";
import type { MovieTileType } from "./movieTile.types";

const MovieTile = ({
  image,
  title,
  releaseYear,
  director,
  duration,
  genre,
  rating,
}: MovieTileType) => {
  return (
    <div className="flex flex-row items-center justify-between shadow-md p-4 transition-all duration-150 hover:shadow-xl">
      {/* Left side section */}
      <div className="flex flex-row space-x-20 items-center">
        <img
          src={image}
          alt={title}
          className="w-40 h-50 rounded-lg shadow-md shadow-gray-400 transition duration-150 hover:scale-105 cursor-pointer "
        />
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
      </div>

      {/* This is for the Right Side Section */}
      <div className="flex flex-row space-x-20 font-bold text-4xl">
        <p className="cursor-pointer">⭐{rating}</p>
        <FaEye className="cursor-pointer" />
        <FaEdit className="cursor-pointer" />
        <FaTrashAlt className="cursor-pointer" />
      </div>
    </div>
  );
};

export default MovieTile;
