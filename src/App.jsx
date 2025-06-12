import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Connect from "./components/Connect";
import HaikuPage from "./components/HaikuPage";
import HealthCheckup from "./components/healthCheckup";

const Home = () => (
  <div>
    <Navbar />
  </div>
);

// doing the above makes sure that the main page does not show up on the about page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/haiku" element={<HaikuPage />} />
        <Route path="/healthcheckup" element={<HealthCheckup />} />
      </Routes>
    </Router>
  );
};

export default App;
