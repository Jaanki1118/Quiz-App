import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="head">
        Intuitive Quiz Hub
      </Link>

      <hr className="divider" />
    </div>
  );
}

export default Header; // ✅ This line is required
