export const BASE_URL = import.meta.env.VITE_BACKEND_URL;
export const GET_ALL_MOVIES = `${BASE_URL}/api/movies`;
export const GET_SPECIFIC_MOVIE = `${BASE_URL}/api/movies`;

//REGISTER
export const POST_REGISTER_USER = `${BASE_URL}/api/auth/register`;

//LOGIN
export const POST_LOGIN_USER = `${BASE_URL}/api/auth/login`;

//ADD MOVIE
export const ADD_MOVIE = `${BASE_URL}/api/movies`;

//DELETE MOVIE
export const DELETE_MOVIE = `${BASE_URL}/api/movies`;

//UPDATE MOVIE
export const UPDATE_MOVIE = `${BASE_URL}/api/movies`;

//GET SINGLE MOVIE
export const GET_MOVIE_BY_ID = `${BASE_URL}/api/movies`;
