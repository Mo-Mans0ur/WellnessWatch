import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage.tsx";
import LoginPage from "./components/LoginPage.tsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
