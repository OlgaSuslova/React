import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <Link to="/">Главная</Link>
      <div></div>
      <Link to="/about">О нас</Link>

      <h1>Home Page</h1>
      <p>This is the home page</p>
    </div>
  );
}

export default HomePage;
