import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "../Component/Header";
import Blogpage from "../Component/Blogpage/Blogpage";
import Home from "../Component/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import BlogPost from "./components/BlogPost/BlogPost";
import "./App.css";
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blogpost" element={<BlogPost />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categorys" element={<Categorys />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogpage" element={<Blogpage />} />
          <Route path="/latest" element={<Latest />} />

        </Routes>
      </Router>
    </>
  );
};

export default App;
