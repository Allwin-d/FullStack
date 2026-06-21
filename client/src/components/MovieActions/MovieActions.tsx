import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { floorValue } from "../../utils/helperFunction";
import type { MovieActionsType } from "./movieActions.types";
import useAuth from "../../hooks/useAuth";
import type { payloadType } from "../../hooks/useAuth.types";

const MovieActions = ({ rating }: MovieActionsType) => {
  const token = useAuth() as payloadType;

  return (
    <div className="flex flex-row space-x-20 font-bold text-4xl">
      <p className="cursor-pointer">⭐{floorValue(rating)}</p>
      <FaEye
        className={`cursor-pointer ${token.role === "User" ? "hidden" : "visible"}`}
      />
      <FaEdit
        className={`cursor-pointer ${token.role === "User" ? "hidden" : "visible"}`}
      />
      <FaTrashAlt
        className={`cursor-pointer ${token.role === "User" ? "hidden" : "visible"}`}
      />
    </div>
  );
};

export default MovieActions;
