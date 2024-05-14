
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "../Component/Header";
import Blogpage from "../Component/Blogpage";
import Home from "../Component/Home";
import "./App.css";
import BlogPost from './components/BlogPost/BlogPost';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import Login from './components/Login/Login';


const App = () => {
  return (

    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogpost" element={<BlogPost />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogpage" element={<Blogpage />} />


        </Routes>
      </Router>
    </>

  );
}

export default App;
