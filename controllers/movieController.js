import Movie from "../models/Movie.js";

export const addMovie = async (req, res) => {
  const movie = await Movie.create(req.body);
  res.json(movie);
};

export const getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};
