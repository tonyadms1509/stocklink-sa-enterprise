import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // optional styling

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header>
        <h1>🚀 Welcome to StockLink OS</h1>
        <p>Your unified dashboard for contractors, suppliers, and logistics.</p>
      </header>

      <div className="role-buttons">
        <button onClick={() => navigate('/contractor')}>Contractors</button>
        <button onClick={() => navigate('/supplier')}>Suppliers</button>
        <button onClick={() => navigate('/logistics')}>Logistics</button>
      </div>

      <footer>
        <p>© 2026 StockLink OS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
