import { useState } from "react";
import {
  ADMIN,
  APP_ABOUT,
  APP_DESCRIPTION,
  APP_TITLE,
  COMMENT_ON_MOVIES,
  CREATE_ACCOUNT,
  EMAIL_ADDRESS,
  FIND_MOVIES,
  FULL_NAME,
  JOIN_THE_DISCUSSION,
  KEEP_TRACK_ON,
  MOVIE_STARTS_HERE,
  PASSWORD,
  RATE_AND_REVIEW,
  ROLE,
  SEARCH_AND_FILTER,
  SELECT_ROLE,
  USER,
} from "../../constants/constantVariables";
import { FaFilm } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { capitalize } from "../../utils/helperFunction";
import type { userDetailType } from "./register.types";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { POST_REGISTER_USER } from "../../url/url";

const Register = () => {
  const [userDetail, setUserDetail] = useState<userDetailType>({
    userName: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setUserDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const API_REGISTER_USER = POST_REGISTER_USER;

  const registerUser = async (userData: userDetailType) => {
    const response = await axios.post(API_REGISTER_USER, userData);
    console.log("Response : ", response);
    return response.data;
  };

  const registerUserMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      console.log("registered Successfully");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    registerUserMutation.mutate(userDetail);
    e.preventDefault();
  };

  console.log("user Detail :", userDetail);
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-row">
        {/* Left side section */}
        <div className="min-h-screen w-full bg-blue-400">
          <div className="h-full w-full bg-gray-100 p-12">
            <div className="flex flex-col space-y-8">
              <div className="flex font-bold text-5xl space-x-6">
                <h1>{APP_TITLE}</h1>
                <FaFilm className="text-5xl p-2 rounded-md bg-orange-600 text-white" />
              </div>
              <div className="flex space-x-6">
                <h1 className="font-bold text-3xl ">{CREATE_ACCOUNT}</h1>
                <p className="text-3xl ">🎬</p>
              </div>

              <p className="text-gray-600 text-2xl font-bold leading-8 [word-spacing:8px]">
                {APP_DESCRIPTION}
              </p>
              {/* User Details section */}
              <form
                className="flex flex-col space-y-14 w-3/4"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col space-y-2">
                  <p className="font-bold text-gray-800 text-xl tracking-wider">
                    {capitalize(FULL_NAME)}
                  </p>
                  <div className="relative flex">
                    <CiUser
                      className="absolute top-6 left-3 text-white "
                      strokeWidth={3}
                    />
                    <input
                      name="userName"
                      type="text"
                      placeholder="eg:Tim Cook"
                      value={userDetail.userName}
                      onChange={handleChange}
                      className="p-5 w-full pl-10 font-bold text-white bg-gray-800 rounded-lg  tracking-widest"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="font-bold text-gray-800 text-xl tracking-wider">
                    {capitalize(EMAIL_ADDRESS)}
                  </p>
                  <div className="relative">
                    <MdOutlineEmail
                      className="absolute top-6 left-3 text-white"
                      strokeWidth={3}
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="eg:timcook7@gmail.com"
                      value={userDetail.email}
                      onChange={handleChange}
                      className="p-5 w-full pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
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
                      placeholder="Min 8 characters"
                      value={userDetail.password}
                      onChange={handleChange}
                      className="p-5 w-full pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest "
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="font-bold text-gray-800 text-xl tracking-wider">
                    {capitalize(ROLE)}
                  </p>
                  <select
                    name="role"
                    value={userDetail.role}
                    onChange={handleChange}
                    className="p-5 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
                  >
                    <option value="">{SELECT_ROLE}</option>
                    <option value="User">{USER}</option>
                    <option value="Admin">{ADMIN}</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-red-600 text-white py-3 rounded-lg hover:transition duration-150 hover:bg-red-700 font-bold tracking-wider hover:scale-105"
                >
                  {CREATE_ACCOUNT}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Right side section  */}
        <div className="min-h-screen w-full bg-gradient-to-b from-purple-900 to-orange-800">
          <div className="flex flex-col space-y-24 items-center justify-center p-12">
            <h1 className="font-bold text-6xl text-white">
              {MOVIE_STARTS_HERE}
            </h1>
            <p className="text-gray-300 text-4xl font-bold leading-loose tracking-wider [word-spacing:8px]">
              {APP_ABOUT}
            </p>
            <div className="flex flex-row space-x-6 w-[400px]">
              <div className="relative">
                <div className="absolute top-4 -left-20 p-2 bg-gray-300/30 rounded-lg ">
                  <FaSearch className="text-white text-5xl" />
                </div>

                <div className="flex flex-col space-y-4">
                  <p className="font-bold text-4xl text-white">
                    {SEARCH_AND_FILTER}
                  </p>
                  <p className="font-bold text-xl text-gray-300">
                    {FIND_MOVIES}
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
                    {JOIN_THE_DISCUSSION}
                  </p>
                  <p className="font-bold text-xl text-gray-300">
                    {COMMENT_ON_MOVIES}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-6 w-[400px]">
              <div className="relative">
                <div className="absolute top-4 -left-20 p-2 bg-gray-300/30 rounded-lg">
                  <FaRegStar className="text-white text-5xl" />
                </div>

                <div className="flex flex-col space-y-4">
                  <p className="font-bold text-4xl text-white">
                    {RATE_AND_REVIEW}
                  </p>
                  <p className="font-bold text-xl text-gray-300">
                    {KEEP_TRACK_ON}
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

export default Register;
