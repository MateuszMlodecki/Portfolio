import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Sidebar } from "./components/SidebarRefactor";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Contact } from "./pages/Contact";
import { Cv } from "./pages/Cv";
import { Projects } from "./pages/Projects";
import { Box } from "@mui/material";

function App() {
  return (
    <Router>
      <Sidebar />

      <Box
        sx={{
          marginLeft: { xs: 0, md: "80px" },
        }}
      >
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/About" element={<AboutMe />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cv" element={<Cv />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/Portfolio" />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
