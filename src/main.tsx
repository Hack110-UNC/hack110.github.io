import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './pages/hack110';
import About from './pages/about';
import Map from './pages/map';
import Workshops from "./pages/workshops";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/hack110/" element={<Navigate to="/hack110" replace />} />
        <Route path="/hack110" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/map" element={<Map />} />
        <Route path="/workshops" element={<Workshops />} />
      </Routes>
    </Router>
  </React.StrictMode>
);