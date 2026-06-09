import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { floorValue } from "../../utils/helperFunction";
import type { MovieActionsType } from "./movieActions.types";

const MovieActions = ({ rating }: MovieActionsType) => {
  return (
    <div className="flex flex-row space-x-20 font-bold text-4xl">
      <p className="cursor-pointer">⭐{floorValue(rating)}</p>
      <FaEye className="cursor-pointer" />
      <FaEdit className="cursor-pointer" />
      <FaTrashAlt className="cursor-pointer" />
    </div>
  );
};

export default MovieActions;
