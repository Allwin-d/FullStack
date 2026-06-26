import Header from "../../components/Header/Header";
import AppTitle from "../../components/AppTitle/AppTitle";
import { FaExclamationCircle } from "react-icons/fa";

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
              <FaExclamationCircle className="w-10 h-10 p-2 text-red-500 bg-red-100 rounded-full" />
            </div>
            <div className="flex flex-col justify-center">
              <p>Basic Information</p>
              <p>Title, director, language and year</p>
            </div>
          </div>
          <hr></hr>
          {/* Basic info field section */}
          <div className="grid gri-cols-1 md:grid-cols-2 gap-10  ">
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                Movie Title <span className="text-red-600">*</span>
              </p>
              <input
                type="text"
                className="p-5  pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest w-3/4"
                placeholder="eg:Joker"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                Director <span className="text-red-600">*</span>
              </p>
              <input
                type="text"
                className="p-5 w-3/4 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
                placeholder="eg:Todd Philips"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                Language <span className="text-red-600">*</span>
              </p>
              <input
                type="number"
                className="p-5 w-3/4 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                Release Year <span className="text-red-600">*</span>
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
              <p>s</p>
            </div>
            <div className="flex flex-col  justify-center">
              <p>Genre & Cast</p>
              <p>Add genres and cast members</p>
            </div>
          </div>
          <hr></hr>
          {/* Genre field section */}
          <div className="grid gri-cols-1 gap-10  ">
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                Genre <span className="text-red-600">*</span>
              </p>
              <input
                type="text"
                placeholder="Type a genre and pres Enter(e.g. Action)"
                className="p-5 w-1/2 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                Cast Members
              </p>
              <input
                type="text"
                placeholder="Type a name and press Enter(e.g.Joaquin Phoenix)"
                className="p-5 w-1/2 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
              />
            </div>
          </div>
        </div>

        {/* Rating & Duration  */}
        <div className="flex flex-col p-6 bg-gray-100 space-y-4 shadow-lg shadow-gray-200 rounded-lg">
          <div className="flex space-x-2">
            <div>
              <p>s</p>
            </div>
            <div className="flex flex-col justify-center">
              <p>Rating & Durationt</p>
              <p>Movie rating and runtime</p>
            </div>
          </div>
          <hr></hr>
          {/* Rating and Duration field section */}
          <div className="grid gri-cols-2 gap-10">
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                Rating <span className="text-red-600">*</span>
              </p>
              <input
                type="text"
                placeholder="e.g.8.4"
                className="p-5 w-1/2 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
              />
              <p>Enter a value between 1.0 and 10.0</p>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                Duration(MINS) <span className="text-red-600">*</span>
              </p>
              <input
                type="number"
                placeholder="e.g.122"
                className="p-5 w-1/2 pl-10 font-bold text-white bg-gray-800 rounded-lg tracking-widest"
              />
              <p>Total runtime in minutes</p>
            </div>
          </div>
        </div>

        {/* Synopsis */}
        <div className="flex flex-col  p-6 bg-gray-100 space-y-4 shadow-lg shadow-gray-200 rounded-lg">
          <div className="flex space-x-2">
            <div>
              <p>s</p>
            </div>
            <div className="flex flex-col justify-center">
              <p>Synopsis</p>
              <p>Short description of the movie</p>
            </div>
          </div>
          <hr></hr>
          {/* Rating and Duration field section */}
          <div className="grid gri-cols-1 gap-10 ">
            <div className="flex flex-col space-y-4">
              <p className="font-bold text-gray-600 text-xl tracking-wider">
                Synopsis
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
