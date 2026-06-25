import { APP_TITLE } from "../../constants/constantVariables";
import { FaFilm } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import type { payloadType } from "../../hooks/useAuth.types";

export type AppTitletype = {
  totalMovies?: number;
};

const AppTitle = ({ totalMovies }: AppTitletype) => {
  const token = useAuth() as payloadType;

  return (
    <div className=" flex flex-row font-bold text-3xl space-x-6 w-full h-40  bg-gradient-to-r from-purple-900 to-purple-800 p-12 justify-between items-center ">
      <div className="flex flex-col space-y-2">
        <div className="flex flex-row space-x-4 text-5xl">
          <h1 className="text-white">{APP_TITLE} </h1>
          <FaFilm className="text-5xl p-2 rounded-md  bg-orange-600 text-white" />
        </div>
        <p className="text-gray-300 tracking-wider">
          {totalMovies} movies in collection
        </p>
      </div>

      {/* Right side section */}
      <div className="text-2xl text-white">
        {token?.role === "Admin" ? (
          <button className="bg-blue-500  rounded-full p-4 transition duration-200 hover:bg-blue-700 hover:scale-110">
            + Add Movie
          </button>
        ) : (
          <p className="text-2xl text-white">View only</p>
        )}
      </div>
    </div>
  );
};

export default AppTitle;
