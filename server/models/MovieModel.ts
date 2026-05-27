import mongoose, { Schema } from "mongoose";

const MovieSchema = new Schema({
  title: {
    type: String,
    required: [true, "Movie Title is required"],
    trim: true,
    unique: true,
    maxLength: [100, "Title Cannot exceed 100 characters"],
  },
  image: {
    type: String,
    required: [true, "Image is required "],
    trim: true,
  },
  genre: {
    type: [String],
    required: [true, "Genre is required"],
    enum: [
      "Action",
      "Adventure",
      "Animation",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Fantasy",
      "Horror",
      "Mystery",
      "Romance",
      "Sci-Fi",
      "Thriller",
      "War",
      "Western",
      "Musical",
      "Biography",
      "Family",
      "Sports",
      "Superhero",
    ],
  },
  language: {
    type: String,
    trim: true,
    required: [true, "Language is required "],
  },
  releaseYear: {
    type: Number,
    required: [true, "Release Year is required "],
  },
  rating: {
    type: Number,
    required: [true, "Rating is required"],
    min: 0,
    max: 10,
  },
  cast: {
    type: [String],
    required: [true, "Cast is required"],
  },
  director: {
    type: String,
    trim: true,
    required: [true, "Director Name is required "],
  },
  duration: {
    type: Number,
    required: [true, "Duration time is required"],
  },
  synopsis: {
    type: String,
  },
});

const Movie = mongoose.model("Book", MovieSchema);
export default Movie;
