import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage.tsx";
import LoginPage from "./components/LoginPage.tsx";
import Dashboard from "./components/Dashboard.tsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
