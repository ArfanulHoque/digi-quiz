import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <h1> Digi-Quiz</h1>
      <nav>
        <Link to="/topics">Topics</Link>
        <Link to="/quizzes"></Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div>
        <img src="/src/images/banner.jpg" alt="" />
      </div>
    </div>
  );
};

export default Header;
