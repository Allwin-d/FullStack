import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { DELETE_MOVIE, GET_ALL_MOVIES } from "../../url/url";
import axios from "axios";
import type { movieDataType, singleMovie } from "../Home/home.types";
import {
  FAILED_LOADING_DATA,
  LOADING_DATA,
} from "../../constants/constantVariables";
import MovieTile from "../../components/MovieTile/MovieTile";
import Header from "../../components/Header/Header";
import AppTitle from "../../components/AppTitle/AppTitle";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { useState } from "react";

const Home = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState<singleMovie | null>(null);

  const queryClient = useQueryClient();

  const getAllMovies = async () => {
    const data = await axios.get<movieDataType>(GET_ALL_MOVIES);
    return data.data;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["Movies"],
    queryFn: getAllMovies,
    enabled: !!GET_ALL_MOVIES,
  });

  //Delete functionality
  const { mutate: deleteMovie, isPending: isDeleting } = useMutation({
    mutationFn: (id: string) => axios.delete(`${DELETE_MOVIE}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Movies"] }); // ✅ refetch list after delete
      setShowDeleteModal(false);
      setMovieToDelete(null);
    },
    onError: () => {
      alert("Failed to delete movie. Please try again.");
    },
  });

  // ✅ called from MovieTile → MovieActions → DeleteIcon
  const handleDeleteClick = (movie: singleMovie) => {
    setMovieToDelete(movie);
    setShowDeleteModal(true);
  };

  // ✅ called from modal confirm button
  const handleConfirmDelete = () => {
    if (movieToDelete) {
      deleteMovie(movieToDelete._id);
    }
  };

  if (isError) {
    return (
      <div className="min-h-screen w-full text-red-700 text-5xl font-medium">
        <p>{FAILED_LOADING_DATA}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen w-full text-blue-700 text-5xl font-medium">
        <p>{LOADING_DATA}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full">
      <Header />
      <AppTitle
        totalMovies={data?.totalMovies ?? 0}
        title="Movie Catalogue"
        description="Movies in Collection"
        buttonInfo="+ Add Movie"
        text="view only"
      />
      <div className="flex flex-col space-y-10 p-12 bg-gray-100">
        {data?.data.map((movie) => (
          <MovieTile
            key={movie._id}
            id={movie._id}
            image={movie.image}
            title={movie.title}
            releaseYear={movie.releaseYear}
            director={movie.director}
            duration={movie.duration}
            genre={movie.genre}
            rating={movie.rating}
            onDeleteClick={() => handleDeleteClick(movie)}
          />
        ))}
      </div>

      {/* ✅ modal renders at Home level, above everything */}
      {showDeleteModal && movieToDelete && (
        <DeleteModal
          movieTitle={movieToDelete.title}
          isDeleting={isDeleting}
          onCancel={() => {
            setShowDeleteModal(false);
            setMovieToDelete(null);
          }}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default Home;
