import Header from "../../components/Header/Header";
import AppTitle from "../../components/AppTitle/AppTitle";
import { FaExclamationCircle } from "react-icons/fa";
import { BsFillPinFill } from "react-icons/bs";
import { RiStarLine } from "react-icons/ri";
import { ImParagraphLeft } from "react-icons/im";
import { BASIC_INFO_DESC, BASIC_INFORMATION, CAST_MEMBERS, DIRECTOR, DURATIION, DURATION_DESC, GENRE, GENRE_AND_CAST, GENRE_CAST_DESC, LANGUAGE, MOVIE_TITLE, RATING, RATING_DESC, RELEASE_YEAR, SYNOPSIS, SYNOPSIS_DESC } from "../../constants/constantVariables";

const AddMovie = () => {
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
              <p className="font-bold text-xl text-gray-600">{BASIC_INFO_DESC}</p>
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
                className="p-5  pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest w-3/4"
                placeholder="eg:Joker"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                {DIRECTOR} <span className="text-red-600">*</span>
              </p>
              <input
                type="text"
                className="p-5 w-3/4 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
                placeholder="eg:Todd Philips"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                {LANGUAGE} <span className="text-red-600">*</span>
              </p>
              <input
                type="text"
                className="p-5 w-3/4 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
                placeholder="eg:English"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                {RELEASE_YEAR} <span className="text-red-600">*</span>
              </p>
              <input
                type="text"
                placeholder="eg:2019"
                className="p-5 w-3/4 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
              />
            </div>
          </div>
        </div>

        {/* Genre & Cast Section */}
        <div className="flex flex-col  p-6 bg-gray-100 space-y-4 shadow-lg shadow-gray-200 rounded-lg">
          <div className="flex space-x-2">
            <div>
              <BsFillPinFill  className="w-16 h-16 p-2 text-blue-500 bg-blue-100 rounded-full"/>
            </div>
            <div className="flex flex-col space-y-2  justify-center">
              <h1  className="font-bold text-3xl">{GENRE_AND_CAST}</h1>
              <p  className="font-bold text-xl text-gray-600">{GENRE_CAST_DESC}</p>
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
                placeholder="Type a genre and pres Enter(eg: Action)"
                className="p-5 w-1/2 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                {CAST_MEMBERS}
              </p>
              <input
                type="text"
                placeholder="Type a name and press Enter(eg:Joaquin Phoenix)"
                className="p-5 w-1/2 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
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
                type="text"
                placeholder="eg:8.4"
                className="p-5 w-1/2 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
              />
              <p>{RATING_DESC}</p>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                {DURATIION} <span className="text-red-600">*</span>
              </p>
              <input
                type="number"
                placeholder="eg:122"
                className="p-5 w-1/2 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
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
                placeholder="Write a short description of the movie plot"
                className=" border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 p-5 w-full pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
