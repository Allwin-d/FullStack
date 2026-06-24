import { Initials, capitalize } from "../../utils/helperFunction";
import { CiUser } from "react-icons/ci";
import { CAST } from "../../constants/constantVariables";

export type castTypes = {
  cast: string[];
};

const Cast = ({ cast }: castTypes) => {
  return (
    <div className="p-12 flex flex-col space-y-4">
      <h1 className="font-bold text-3xl">{capitalize(CAST)}</h1>
      <div className="flex flex-row space-x-36 items-center justify-start">
        {cast.map((person, id) => (
          <div
            key={id}
            className="flex flex-row items-center justify-center space-x-2 rounded-full border-gray-200 border-4 px-6 py-2"
          >
            <p className="rounded-full bg-red-500 text-lg text-white p-4 font-bold ">
              {Initials(person)}
            </p>
            <CiUser />
            <p className="text-base font-medium">{person}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
