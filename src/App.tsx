import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDemo from './pages/ProjectDemo'

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <div className="pt-16">
        <Routes>
          <Route path='/portfolio_website' element={<Home></Home>}></Route>
          <Route path='/portfolio_website/about' element={<About></About>}></Route>
          <Route path='portfolio_website/projects' element={<Projects></Projects>}></Route>
          <Route path='/portfolio_website/project-demo/:projectId' element={<ProjectDemo></ProjectDemo>}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;