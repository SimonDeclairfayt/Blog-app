
import { useState } from "react";
import { Link } from "react-router-dom";

import './Header.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import searchIcon from '../public/icon-loupe-white.svg'; // Import the search icon


function Header() {
  const [close, setClose] = useState(false);

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleClick = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };
  return (

    <div
      className="header"
      /*style={{ height: isHeaderVisible ? "100vh" : "10vh" }}*/
    >
      <div
        className="header-nav"
        /*style={{ height: isHeaderVisible ? "60vh" : "10vh" }}*/
      >
        <h1
        id="title"
          /*style={{
            cursor: "pointer",
          }}
          onClick={handleClick}*/
        >
          Sport-Blog
        </h1>
        <nav /*style={{ display: isHeaderVisible ? "block" : "none" }}*/>

          <ul className="header-category">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/BlogPage">Tags</Link>
            </li>
            <li>
              <Link to="/profile">Profil</Link>
            </li>

          </ul>
        </nav>
      </div>

      <div
        className="header-right"
        /*style={{ display: isHeaderVisible ? "block" : "none" }}*/
      >
        <form action="submit">
          <input type="text" />
          <img src="../public/icon-loupe-white.svg" alt="" />

        </form>
        <Link to="/register">
          <button className="register">Register</button>
        </Link>
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
