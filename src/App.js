import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { Contact } from './pages/Contact';
import { Cv } from './pages/Cv';
import { Projects } from './pages/Projects';
import HomePage from './pages/Landing/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Portfolio" element={<Home />} />
        <Route path="/About" element={<AboutMe />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cv" element={<Cv />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/Portfolio" />} />
        <Route path="/newportfolio" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
