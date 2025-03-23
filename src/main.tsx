import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './pages/hack110';
import About from './pages/about';
import Map from './pages/map';
import Workshops from "./pages/workshops";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/map" element={<Map />} />
        <Route path="/workshops" element={<Workshops />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
