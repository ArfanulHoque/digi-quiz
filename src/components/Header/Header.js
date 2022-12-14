import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar">
        <h1> Digi-Quiz</h1>
        <nav>
          <Link to="/">Topics</Link>
          <Link to="/quiz"></Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
