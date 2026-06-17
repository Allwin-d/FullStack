import { capitalize } from "../../utils/helperFunction";
import { SYNOPSIS } from "../../constants/constantVariables";
import type { synopsisData } from "./synopsis.types";

const Synopsis = ({ synopsis }: synopsisData) => {
  return (
    <div className="p-12 flex flex-col space-y-4 w-3/4">
      <h1 className="font-bold text-3xl">{capitalize(SYNOPSIS)}</h1>
      <div className="p-7 border-4 border-gray-200">
        <p className="text-gray-600 text-lg font-bold leading-8 [word-spacing:8px]">
          {synopsis}
        </p>
      </div>
    </div>
  );
};

export default Synopsis;
