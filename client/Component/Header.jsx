import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [close, setClose] = useState(false);
  const handleClick = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    window.location.href = "/"; // Redirect to home or login page
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
        {!isLoggedIn ? (
          <>
            <Link to={"/register"} className="button">
              Register
            </Link>
            <Link to={"/login"} className="button">
              Login
            </Link>
          </>
        ) : (
          <button onClick={handleLogout} className="button">
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
