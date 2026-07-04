import type { MovieTileType } from "./movieTile.types";
import MoviePoster from "../MoviePoster/MoviePoster";
import MovieInfo from "../MovieInfo/MovieInfo";
import MovieActions from "../MovieActions/MovieActions";

const MovieTile = ({
  id,
  image,
  title,
  releaseYear,
  director,
  duration,
  genre,
  rating,
  onDeleteClick
}: MovieTileType) => {
  return (
    <div className="flex flex-row items-center justify-between shadow-md p-4 transition-all duration-150 hover:shadow-xl">
      {/* Left side section */}
      <div className="flex flex-row space-x-20 items-center">
        <MoviePoster image={image} title={title} id ={id} />
        <MovieInfo
          title={title}
          releaseYear={releaseYear}
          director={director}
          duration={duration}
          genre={genre}
        />
      </div>

      {/* This is for the Right Side Section */}
      <MovieActions rating={rating} id={id} onDeleteClick ={onDeleteClick} />
    </div>
  );
};

export default MovieTile;
