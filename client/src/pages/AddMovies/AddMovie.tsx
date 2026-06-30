import Header from "../../components/Header/Header";
import AppTitle from "../../components/AppTitle/AppTitle";
import { FaExclamationCircle } from "react-icons/fa";
import { BsFillPinFill } from "react-icons/bs";
import { RiStarLine } from "react-icons/ri";
import { ImParagraphLeft } from "react-icons/im";
import { FaRegImage } from "react-icons/fa6";
import {
  BASIC_INFO_DESC,
  BASIC_INFORMATION,
  CAST_MEMBERS,
  DIRECTOR,
  DURATIION,
  DURATION_DESC,
  GENRE,
  GENRE_AND_CAST,
  GENRE_CAST_DESC,
  LANGUAGE,
  MOVIE_POSTER,
  MOVIE_POSTER_DESC,
  MOVIE_TITLE,
  POSTER_URL,
  RATING,
  RATING_DESC,
  RELEASE_YEAR,
  SYNOPSIS,
  SYNOPSIS_DESC,
} from "../../constants/constantVariables";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";
import { ADD_MOVIE } from "../../url/url";
import { useNavigate } from "react-router-dom";

export type movieDetailsTypes = {
  title: string;
  director: string;
  language: string;
  releaseYear: number;
  genre: string[];
  cast: string[];
  rating: number;
  duration: number;
  synopsis: string;
  image: string;
};

export type responseDataType = {
  success: boolean;
  message: string;
  data: movieDetailsTypes;
};

const AddMovie = () => {
  const [movieDetails, setMovieDetails] = useState<movieDetailsTypes>({
    title: "",
    director: "",
    language: "",
    releaseYear: 0,
    genre: [],
    cast: [],
    rating: 0,
    duration: 0,
    synopsis: "",
    image: "",
  });

  const [inputs, setInputs] = useState({
    genre: "",
    cast: "",
  });

  const navigate = useNavigate();

  const API_ADD_MOVIE = ADD_MOVIE;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setMovieDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log("Movie Details in Add Movie section : ", movieDetails);

  const handleInputArray = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: "genre" | "cast",
  ) => {
    if (e.key !== "Enter") return;

    e.preventDefault();
    const value = inputs[field].trim();
    if (!value) return;

    setMovieDetails((prev) => ({
      ...prev,
      [field]: [...prev[field], value],
    }));

    setInputs((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const addMovie = async (movieData: movieDetailsTypes) => {
    const response = await axios.post<responseDataType>(
      API_ADD_MOVIE,
      movieData,
    );
    return response.data;
  };

  const addMovieMutation = useMutation({
    mutationFn: addMovie,
    onSuccess: () => {
      toast.success("Movie Added Successfully");
      navigate("/home");
    },
    onError: () => {
      toast.error("Failed to Add Movie ");
    },
  });

  return (
    <div className="min-h-screen w-full bg-slate-100 ">
      <Header />
      <AppTitle
        title="Add New Movie"
        description="Fill in the details below to add a movie to the catalog"
        text={<span className="text-7xl shadow-lg shadow-gray-300">🎬</span>}
      />
      {/* Whole section  */}
      <div className="flex flex-col space-y-12 p-10   min-h-screen  bg-white  ">
        {/* Basic Information section */}
        <div className="flex flex-col  p-6 bg-gray-100 space-y-4 shadow-lg shadow-gray-200 rounded-lg">
          <div className="flex space-x-2">
            <div className="flex items-center">
              <FaExclamationCircle className="w-16 h-16 p-2 text-red-500 bg-red-100 rounded-full" />
            </div>
            <div className="flex flex-col space-y-2 justify-center">
              <h1 className="font-bold text-3xl">{BASIC_INFORMATION}</h1>
              <p className="font-bold text-xl text-gray-600">
                {BASIC_INFO_DESC}
              </p>
            </div>
          </div>
          <hr></hr>
          {/* Basic info field section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10  ">
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                {MOVIE_TITLE} <span className="text-red-600">*</span>
              </p>
              <input
                type="text"
                name="title"
                value={movieDetails.title}
                className="p-5  pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest w-3/4"
                placeholder="eg:Joker"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                {DIRECTOR} <span className="text-red-600">*</span>
              </p>
              <input
                type="text"
                name="director"
                value={movieDetails.director}
                className="p-5 w-3/4 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
                placeholder="eg:Todd Philips"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                {LANGUAGE} <span className="text-red-600">*</span>
              </p>
              <input
                type="text"
                name="language"
                value={movieDetails.language}
                className="p-5 w-3/4 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
                placeholder="eg:English"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                {RELEASE_YEAR} <span className="text-red-600">*</span>
              </p>
              <input
                type="number"
                name="releaseYear"
                value={movieDetails.releaseYear}
                placeholder="eg:2019"
                className="p-5 w-3/4 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Genre & Cast Section */}
        <div className="flex flex-col  p-6 bg-gray-100 space-y-4 shadow-lg shadow-gray-200 rounded-lg">
          <div className="flex space-x-2">
            <div>
              <BsFillPinFill className="w-16 h-16 p-2 text-blue-500 bg-blue-100 rounded-full" />
            </div>
            <div className="flex flex-col space-y-2  justify-center">
              <h1 className="font-bold text-3xl">{GENRE_AND_CAST}</h1>
              <p className="font-bold text-xl text-gray-600">
                {GENRE_CAST_DESC}
              </p>
            </div>
          </div>
          <hr></hr>
          {/* Genre field section */}
          <div className="grid gri-cols-1 gap-10  ">
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                {GENRE} <span className="text-red-600">*</span>
              </p>
              <input
                type="text"
                name="genre"
                value={inputs.genre}
                placeholder="Type a genre and pres Enter(eg: Action)"
                className="p-5 w-1/2 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
                onChange={(e) =>
                  setInputs((prev) => ({
                    ...prev,
                    genre: e.target.value,
                  }))
                }
                onKeyDown={(e) => handleInputArray(e, "genre")}
              />
            </div>
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                {CAST_MEMBERS}
                <span className="text-red-600">*</span>
              </p>
              <input
                type="text"
                name="cast"
                value={inputs.cast}
                placeholder="Type a name and press Enter(eg:Joaquin Phoenix)"
                className="p-5 w-1/2 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
                onKeyDown={(e) => handleInputArray(e, "cast")}
                onChange={(e) =>
                  setInputs((prev) => ({
                    ...prev,
                    cast: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </div>

        {/* Rating & Duration  */}
        <div className="flex flex-col p-6 bg-gray-100 space-y-4 shadow-lg shadow-gray-200 rounded-lg">
          <div className="flex space-x-2">
            <div>
              <RiStarLine className="w-16 h-16 p-2 text-green-500 bg-green-100 rounded-full" />
            </div>
            <div className="flex flex-col space-y-2 justify-center">
              <h1 className="font-bold text-3xl">{RATING}</h1>
              <p className="font-bold text-xl text-gray-600">{RATING_DESC}</p>
            </div>
          </div>
          <hr></hr>
          {/* Rating and Duration field section */}
          <div className="grid gri-cols-2 gap-10">
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                {RATING} <span className="text-red-600">*</span>
              </p>
              <input
                type="number"
                name="rating"
                value={movieDetails.rating}
                placeholder="eg:8.4"
                className="p-5 w-1/2 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
                onChange={handleChange}
              />
              <p>{RATING_DESC}</p>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                {DURATIION} <span className="text-red-600">*</span>
              </p>
              <input
                type="number"
                name="duration"
                value={movieDetails.duration}
                placeholder="eg:122"
                className="p-5 w-1/2 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
                onChange={handleChange}
              />
              <p>{DURATION_DESC}</p>
            </div>
          </div>
        </div>

        {/* Synopsis */}
        <div className="flex flex-col  p-6 bg-gray-100 space-y-4 shadow-lg shadow-gray-200 rounded-lg">
          <div className="flex space-x-2">
            <div>
              <ImParagraphLeft className="w-16 h-16 p-2 text-yellow-500 bg-yellow-100 rounded-full" />
            </div>
            <div className="flex flex-col space-y-2 justify-center">
              <h1 className="font-bold text-3xl">{SYNOPSIS}</h1>
              <p className="font-bold text-xl text-gray-600">{SYNOPSIS_DESC}</p>
            </div>
          </div>
          <hr></hr>
          {/* Rating and Duration field section */}
          <div className="grid gri-cols-1 gap-10 ">
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                {SYNOPSIS}
              </p>
              <textarea
                rows={5}
                name="synopsis"
                value={movieDetails.synopsis}
                placeholder="Write a short description of the movie plot"
                onChange={handleChange}
                className=" border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 p-5 w-full pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
              />
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="flex flex-col  p-6 bg-gray-100 space-y-4 shadow-lg shadow-gray-200 rounded-lg">
          <div className="flex space-x-2">
            <div>
              <FaRegImage className="w-16 h-16 p-2 text-purple-500 bg-purple-100 rounded-full" />
            </div>
            <div className="flex flex-col space-y-2  justify-center">
              <h1 className="font-bold text-3xl">{MOVIE_POSTER}</h1>
              <p className="font-bold text-xl text-gray-600">
                {MOVIE_POSTER_DESC}
              </p>
            </div>
          </div>
          <hr></hr>
          {/* Image field section */}
          <div className="grid gri-cols-1 gap-10  ">
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                {POSTER_URL} <span className="text-red-600">*</span>
              </p>
              <input
                type="text"
                name="image"
                value={movieDetails.image}
                placeholder="Type a genre and pres Enter(eg: Action)"
                className="p-5 w-1/2 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Footer section */}
        <div className="flex justify-end">
          <button
            className="rounded-lg bg-red-500 text-white hover:bg-red-700 transition duration-200 hover:scale-95 px-4 py-2 text-3xl"
            onClick={() => addMovieMutation.mutate(movieDetails)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
