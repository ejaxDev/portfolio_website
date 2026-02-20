import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDemo from './pages/ProjectDemo';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Trading from './pages/Trading';
import { logPageView } from './utils/analytics';

// Component to track route changes
const AppContent: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    logPageView(location.pathname, document.title);
  }, [location]);

  return (
    <>
      <NavBar />
      <div className="pt-16 md:pt-12">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/project-demo/:projectId" element={<ProjectDemo />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router basename="/portfolio_website/">
      <AppContent />
    </Router>
  );
};

export default App;
