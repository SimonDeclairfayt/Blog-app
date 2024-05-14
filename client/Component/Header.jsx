import './Header.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import searchIcon from '../public/icon-loupe-white.svg'; // Import the search icon

function Header() {
  return (
    <div className="header">
      <div className="header-nav">
        <h1 className='titlecc'>Champion Chronicle</h1>
        <nav>
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
      <div className="header-right">
        <form action="submit" className="search-form">
          <input type="text" className="search-input" placeholder="Search..." />
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
