
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "../Component/Header";
import Blogpage from "../Component/Blogpage";
import Home from "../Component/Home";
import "./App.css";
import BlogPost from './components/BlogPost/BlogPost';
import Settings from './components/Settings/Settings'; 

const App = () => {
  return (

    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogpost" element={<BlogPost />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
