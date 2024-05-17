import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useContext } from "react";
import Header from "../Component/Header";
import Blogpage from "../Component/Blogpage/Blogpage";
import Home from "../Component/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import BlogPost from "./components/BlogPost/BlogPost";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogpost" element={<BlogPost />} />
          <Route path="/profil" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
