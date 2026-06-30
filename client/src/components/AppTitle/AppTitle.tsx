import { FaFilm } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import type { payloadType } from "../../hooks/useAuth.types";
import type { AppTitletype } from "./appTitle.types";
import { useNavigate } from "react-router-dom";

const AppTitle = ({
  title,
  description,
  totalMovies,
  buttonInfo,
  text,
}: AppTitletype) => {
  const token = useAuth() as payloadType;
  const navigate = useNavigate();

  return (
    <div className=" flex flex-row font-bold text-3xl space-x-6 w-full h-40  bg-gradient-to-r from-purple-900 to-purple-800 p-12 justify-between items-center ">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row space-x-4 text-5xl">
          <h1 className="text-white">{title} </h1>
          <FaFilm className="text-5xl p-2 rounded-md  bg-orange-600 text-white" />
        </div>
        <p className="text-gray-300 tracking-wider">
          {`${totalMovies ? totalMovies : ""} ${description}`}
        </p>
      </div>

      {/* Right side section */}
      <div className="text-2xl text-white">
        {token?.role === "Admin" && buttonInfo ? (
          <button
            className="bg-blue-500  rounded-full p-4 transition duration-150 hover:bg-blue-700 hover:scale-90"
            onClick={() => navigate("/addMovie")}
          >
            {buttonInfo}
          </button>
        ) : (
          (text ?? <p className="text-3xl text-white">{text}</p>)
        )}
      </div>
    </div>
  );
};

export default AppTitle;
