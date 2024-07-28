import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">CKadabra</h1>
        <nav>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <Link to="/editor" className="btn-nav-main">
              Editor
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
