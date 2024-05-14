import './Header.css';
import searchIcon from '../public/icon-loupe-white.svg'; // Import the search icon

function Header() {
  return (
    <div className="header">
      <div className="header-nav">
        <h1 className='titlecc'>Champion Chronicle</h1>
        <nav>
          <ul className="header-category">
            <li>Home</li>
            <li>Tags</li>
            <li>Profil</li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <form action="submit" className="search-form">
          <input type="text" className="search-input" placeholder="Search..." />
        </form>
        <button className="register">Register</button>
        <button className="login">Login</button>
      </div>
    </div>
  );
}

export default Header;
