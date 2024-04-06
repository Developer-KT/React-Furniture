import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <img src="/images/HOME.CO.svg" alt="Home.Co logo" />
      <nav>
        <ul className="nav-tabs">
          <li className="tab">
            <Link to="/">Home</Link>
          </li>
          <li className="tab">
            <Link to="/shop-all">Shop All</Link>
          </li>
          <li className="tab">
            <Link to="/specials">Specials</Link>
          </li>
        </ul>
      </nav>
      <button className="btn" id="contact-btn">
        Contact Us
      </button>
    </header>
  );
}
