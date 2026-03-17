import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">StockLink OS</h1>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <div className="hidden md:flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/contractor">Contractor</Link>
          <Link to="/supplier">Supplier</Link>
          <Link to="/logistics">Logistics</Link>
          <Link to="/driver">Driver</Link>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col mt-2 space-y-2 md:hidden">
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/contractor">Contractor</Link>
          <Link to="/supplier">Supplier</Link>
          <Link to="/logistics">Logistics</Link>
          <Link to="/driver">Driver</Link>
        </div>
      )}
    </nav>
  );
}
