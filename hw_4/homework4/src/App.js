import React from 'react';
import './App.css';
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/about" element={<AboutPage/>} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
