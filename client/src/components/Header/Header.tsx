import { useNavigate } from "react-router-dom";
import { APP_TITLE } from "../../constants/constantVariables";
import logo from "../../images/icon.png";
import useAuth from "../../hooks/useAuth";
import type { payloadType } from "../../hooks/useAuth.types";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home");
  };

  const token = useAuth() as payloadType;
  console.log("Token Details : ", token);

  return (
    <div className="w-full h-20 flex flex-row items-center justify-between bg-gray-300 p-12 shadow-sm shadow-gray-500 sticky top-0 z-50 ">
      {/* Left side section */}
      <div
        className="flex flex-row space-x-2 items-center"
        onClick={handleNavigate}
      >
        <img
          src={logo}
          alt="App Logo"
          className="w-16 h-16 rounded-2xl cursor-pointer"
        />
        <p className="font-medium text-xl cursor-pointer">{APP_TITLE}</p>
      </div>

      {/* Right side section  */}
      <div className="flex flex-row space-x-4 text-xl items-center">
        <p className="font-medium cursor-pointer bg-red-600 p-2 rounded-full text-white px-4">
          {token.role}
        </p>
        <p className="font-medium cursor-pointer">
          Hi {token.userName.split(" ")[0]}{" "}
        </p>
      </div>
    </div>
  );
};

export default Header;
