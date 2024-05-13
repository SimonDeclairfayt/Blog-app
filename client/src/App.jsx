import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "../Component/Header";
import Blogpage from "../Component/Blogpage";
import Home from "../Component/Home";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
