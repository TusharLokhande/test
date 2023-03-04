import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="nav_brand">Header</div>
      <div className="other-links">
        <div>
          <Link to="/1"> Component 1</Link>
        </div>
        <div>
          <Link to="/2"> Component 2</Link>
        </div>
        <div>
          <Link to="/3"> Component 3</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
