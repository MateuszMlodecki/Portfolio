import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 1. Dodaj importy z MUI oraz import obrazka tła
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import backgroundImg from './background_portfolio.png'; // WAŻNE: Upewnij się, że ścieżka do pliku jest poprawna!

// Importy Twoich stron (bez zmian)
import HomePage from './pages/Landing/HomePage';
// import { Home } from './pages/Home';
// import { AboutMe } from './pages/AboutMe';
// import { Contact } from './pages/Contact';
// import { Cv } from './pages/Cv';
// import { Projects } from './pages/Projects';

// 2. Stwórz motyw z globalnymi stylami dla tła
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // Kluczowa właściwość, która "przykleja" tło do okna przeglądarki
          backgroundAttachment: 'fixed',
          // Kolor tła jako fallback, widoczny przed załadowaniem obrazka
          backgroundColor: '#2d3436',
        },
      },
    },
  },
});

function App() {
  return (
    // 3. Owiń całą aplikację (w tym Router) w ThemeProvider
    <ThemeProvider theme={theme}>
      {/* CssBaseline musi być wewnątrz ThemeProvider, aby zastosować style z motywu */}
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/Portfolio" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/Portfolio" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
