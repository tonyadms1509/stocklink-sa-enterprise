import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">StockLink OS</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/contractor">Contractor</Link>
        <Link to="/supplier">Supplier</Link>
        <Link to="/logistics">Logistics</Link>
        <Link to="/driver">Driver</Link>
      </div>
    </nav>
  );
}
