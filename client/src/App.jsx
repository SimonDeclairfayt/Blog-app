import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "../Component/Header";
import Blogpage from "../Component/Blogpage/Blogpage";
import Home from "../Component/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import BlogPost from "./components/BlogPost/BlogPost";
import "./App.css";

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
        </Routes>
      </Router>
    </>
  );
};

export default App;
