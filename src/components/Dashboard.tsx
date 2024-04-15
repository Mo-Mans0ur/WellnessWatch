import React from 'react';
import './Styling/Dashboard.css'; // Make sure to create a corresponding CSS file

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="dashboard-sidebar">
        <nav>
          {/* Place your navigation items or user profile info here */}
        </nav>
        <button className="logout-button">Log ud</button>
      </aside>
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Wellness Watch</h1>
        </header>
        <div className="dashboard-intro">
          <h2>Intro</h2>
          <p>Health Metrics, Water intake, Daily exercise etc.</p>
        </div>
        <div className="dashboard-content">
          {/* Additional content and widgets can go here */}
        </div>
        <footer className="dashboard-footer">
          {/* Footer content if needed */}
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
