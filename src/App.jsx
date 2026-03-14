import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contractor from "./pages/Contractor";
import Supplier from "./pages/Supplier";
import Logistics from "./pages/Logistics";
import Admin from "./pages/Admin";
import "./index.css";

function App() {
  return (
    <Router>
      {/* Deployment 4 visuals */}
      <div className="banner">StockLinkSA — Deployment 4</div>
      <div className="tagline">Building trust, step by step</div>

      {/* Navigation */}
      <NavBar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contractor" element={<Contractor />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      {/* Footer */}
      <footer>© 2026 StockLinkSA. All rights reserved.</footer>
    </Router>
  );
}

export default App;
