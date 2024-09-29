import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Contact } from "./pages/Contact";
import { Cv } from "./pages/Cv";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="md:ml-20 p-0">
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/About" element={<AboutMe />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cv" element={<Cv />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/portfolio" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
