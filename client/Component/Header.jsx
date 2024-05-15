import { useState } from "react";
import { Link } from "react-router-dom";
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
        /*id="title"
          style={{
            cursor: "pointer",
          }}
          onClick={handleClick}*/
        >
          Sport-Blog
        </h1>
        <nav /*style={{ display: isHeaderVisible ? "block" : "none" }}*/>
          <ul className="header-category">
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
      <div
        className="header-right"
        /*style={{ display: isHeaderVisible ? "block" : "none" }}*/
      >
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
