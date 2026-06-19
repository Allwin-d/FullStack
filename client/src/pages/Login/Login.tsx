import { useState } from "react";
import {
  ACCESS_THE_FULL_MOVIE,
  APP_TITLE,
  DATA_IS_PROTECTED,
  EMAIL_ADDRESS,
  PASSWORD,
  PICK_UP,
  SAVED_CATALOG,
  SECURE_LOGIN,
  SEE_AND_MANAGE,
  SIGN_IN,
  SIGN_IN_DESC,
  SING_IN_ABOUT,
  YOUR_COMMENTS,
} from "../../constants/constantVariables";
import { capitalize } from "../../utils/helperFunction";
import { MdMailOutline } from "react-icons/md";
import { FaFilm } from "react-icons/fa6";
import { TbLockPassword } from "react-icons/tb";
import { HiOutlineSave } from "react-icons/hi";
import { GrSecure } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import type { userDetailType } from "./login.types";
import axios from "axios";
import { POST_LOGIN_USER } from "../../url/url";

const Login = () => {
  const [userDetail, setUserDetail] = useState<userDetailType>({
    email: "",
    password: "",
  });

  const API_LOGIN_USER = POST_LOGIN_USER;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginUser = async (userData: userDetailType) => {
    const response = await axios.post(API_LOGIN_USER, userData);
    console.log("Login Response Data : ", response.data);
  };

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      console.log("Logged In successfully");
    },
    onError: () => {
      console.log("Failed to Login");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate(userDetail);
  };

  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-row">
        {/* Left side section */}
        <div className="min-h-screen w-full bg-blue-400">
          <div className="h-full w-full bg-gray-100 p-12">
            <div className="flex flex-col space-y-8">
              <div className="flex font-bold text-5xl space-x-6">
                <h1>{APP_TITLE}</h1>
                <FaFilm className="text-5xl p-2 rounded-md bg-sky-600 text-white" />
              </div>
              <div className="flex space-x-6">
                <h1 className="font-bold text-3xl ">Welcome back👋 </h1>
              </div>

              <p className="text-gray-600 text-2xl font-bold leading-8 [word-spacing:8px]">
                {SIGN_IN_DESC}
              </p>
              {/* User Details section */}
              <form
                className="flex flex-col space-y-14 w-3/4"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col space-y-2">
                  <p className="font-bold text-gray-800 text-xl tracking-wider">
                    {capitalize(EMAIL_ADDRESS)}
                  </p>
                  <div className="relative flex">
                    <MdMailOutline
                      className="absolute top-6 left-3 text-white "
                      strokeWidth={3}
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="eg:Tim Cook"
                      value={userDetail.email}
                      onChange={handleChange}
                      className="p-5 w-full pl-10 font-bold text-white bg-gray-800 rounded-lg  tracking-widest"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="font-bold text-gray-800 text-xl tracking-wider">
                    {capitalize(PASSWORD)}
                  </p>
                  <div className="relative">
                    <TbLockPassword
                      className="absolute top-6 left-3 text-white"
                      strokeWidth={3}
                    />
                    <input
                      name="password"
                      type="password"
                      placeholder="eg:timcook7@gmail.com"
                      value={userDetail.password}
                      onChange={handleChange}
                      className="p-5 w-full pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-sky-600 text-white py-3 rounded-lg hover:transition duration-150 hover:bg-sky-700 font-bold tracking-wider hover:scale-105"
                >
                  {SIGN_IN}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Right side section  */}
        <div className="min-h-screen w-full bg-gradient-to-b from-sky-900 to-sky-700">
          <div className="flex flex-col space-y-24 items-center justify-center p-12">
            <h1 className="font-bold text-6xl text-white">{PICK_UP}</h1>
            <p className="text-gray-300 text-4xl font-bold leading-loose tracking-wider [word-spacing:8px]">
              {SING_IN_ABOUT}
            </p>
            <div className="flex flex-row space-x-6  w-[400px]">
              <div className="relative">
                <div className="absolute top-4 -left-20 p-2 bg-gray-300/30 rounded-lg">
                  <HiOutlineSave className="text-white text-5xl" />
                </div>

                <div className="flex flex-col space-y-4">
                  <p className="font-bold text-4xl text-white">
                    {SAVED_CATALOG}
                  </p>
                  <p className="font-bold text-xl text-gray-300 leading-8">
                    {ACCESS_THE_FULL_MOVIE}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-6 w-[400px]">
              <div className="relative">
                <div className="absolute top-4 -left-20 p-2 bg-gray-300/30 rounded-lg">
                  <GrSecure className="text-white text-5xl" />
                </div>

                <div className="flex flex-col space-y-4">
                  <p className="font-bold text-4xl text-white">
                    {SECURE_LOGIN}
                  </p>
                  <p className="font-bold text-xl text-gray-300 leading-8">
                    {DATA_IS_PROTECTED}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-6 w-[400px]">
              <div className="relative">
                <div className="absolute top-4 -left-20 p-2 bg-gray-300/30 rounded-lg">
                  <FaRegComment className="text-white text-5xl" />
                </div>

                <div className="flex flex-col space-y-4">
                  <p className="font-bold text-4xl text-white">
                    {YOUR_COMMENTS}
                  </p>
                  <p className="font-bold text-xl text-gray-300 leading-8">
                    {SEE_AND_MANAGE}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
