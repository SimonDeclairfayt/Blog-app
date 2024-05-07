function Header() {
  return (
    <div className="header">
      <div className="header-nav">
        <h1>Title</h1>
        <nav>
          <ul className="header-category">
            <li>Home</li>
            <li>Tags</li>
            <li>Profil</li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <form action="submit">
          <input type="text" />
          <img src="../public/icons-search.svg" alt="" />
        </form>
        <button className="register">Register</button>
        <button className="login">Login</button>
      </div>
    </div>
  );
}

export default Header;
