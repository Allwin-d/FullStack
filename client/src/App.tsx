import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AddMovie from "./pages/AddMovies/AddMovie";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/addMovie" element={<AddMovie />}></Route>
          <Route path="/movieDetail" element={<MovieDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
