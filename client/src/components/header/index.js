import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Header() {
  const auth = useSelector((state) => state.auth);

  const { user, isLoggedIn } = auth;

  const handleLogout = async () => {
    try {
      await axios.get('/user/logout');
      localStorage.removeItem('firstLogin');
      window.location.href = '/';
    } catch (err) {
      window.location.href = '/';
    }
  };

  const userLink = () => {
    return (
      <li className="drop-nav">
        <Link to="#" className="avatar">
          <img src={user.avatar} alt="avatar" />
          &nbsp;{user.name}&nbsp;
          <i className="fas fa-angle-down"></i>
        </Link>
        <ul className="dropdown">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </li>
    );
  };

  const transform = {
    transform: isLoggedIn ? 'translateY(-5px)' : 0
  };

  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">MERN</Link>
        </h1>
      </div>
      <ul style={transform}>
        <li>
          <Link to="/">
            <i className="fas fa-shopping-cart"></i> Cart
          </Link>
        </li>
        {isLoggedIn ? (
          userLink()
        ) : (
          <li>
            <Link to="/login">
              <i className="fas fa-user"></i> Sign in
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
