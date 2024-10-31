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
          <Route path="/Portfolio" element={<Home />} />
          <Route path="Portfolio/About" element={<AboutMe />} />
          <Route path="Portfolio/Contact" element={<Contact />} />
          <Route path="Portfolio/Cv" element={<Cv />} />
          <Route path="Portfolio/Projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/Portfolio" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
