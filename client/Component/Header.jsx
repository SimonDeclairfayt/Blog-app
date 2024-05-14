import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="header">
      <div className="header-nav">
        <h1 id="title">Sport-Blog</h1>
        <nav className={menuOpen ? "open" : "header-category"}>
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/blogpost"}>
              <li>Blog Post</li>
            </Link>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="header-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={menuOpen ? "open" : "header-right"}>
        <form action="submit">
          <input type="text" />
          <img src="../public/icon-loupe-white.svg" alt="" />
        </form>
        <Link to={"/register"} className="button">
          {" "}
          Register
        </Link>
        <Link to={"/login"} className="button">
          {" "}
          Login
        </Link>
      </div>
    </div>
  );
}

export default Header;
