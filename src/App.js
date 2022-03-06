import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import LoginScreen from "./screens/LoginScreen";
import "./App.css";

function App() {
  const user = null;
  return (
    <div className="App">
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
