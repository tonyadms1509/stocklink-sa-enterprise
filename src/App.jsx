import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function App() {
  const mockUser = {
    id: 1,
    role: "Admin",
    hasHeardIntro: false,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard user={mockUser} />} />
      </Routes>
    </BrowserRouter>
  );
}
