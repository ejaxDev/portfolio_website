import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDemo from './pages/ProjectDemo'

const App: React.FC = () => {
  return (
    <Router basename="/portfolio_website">
      <NavBar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-demo/:projectId" element={<ProjectDemo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;