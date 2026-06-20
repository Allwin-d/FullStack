import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AddMovie from "./pages/AddMovies/AddMovie";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontSize: "18px",
            padding: "16px",
            minWidth: "350px",
          },
        }}
      />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/addMovie" element={<AddMovie />}></Route>
          <Route path="/movieDetail/:id" element={<MovieDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
