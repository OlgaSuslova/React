import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <Link to="/">Главная</Link>
      <div></div>
      <Link to="/about">О нас</Link>
      <h1>About Page</h1>
      <p>This is the about page</p>
    </div>
  );
}

export default AboutPage;
