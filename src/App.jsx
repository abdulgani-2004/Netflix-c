import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router

import Home from "./componentes/pages/home/Home";
import Login from "./componentes/pages/login/Login";
import Register from "./componentes/pages/register/Register";
import Watch from "./componentes/pages/watch/Watch";

import Navbar from "./componentes/navbar/Navbar"; // Assuming Navbar is in components

function App() {
  return (
    <Router>  {/* Wrap routes with BrowserRouter */}
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
