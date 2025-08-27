import { useState } from 'react';
import { Box, Typography, Stack, Paper, Button, Link } from '@mui/material';
import { FaPiggyBank, FaGithub, FaIndustry } from 'react-icons/fa';
import BankingAppHomepage from '../images/BankingApp/BankingAppHomepage.png';
import BankingAppDashboard from '../images/BankingApp/BankingAppDashboard.png';
import AplikacjaWcenHome from '../images/AplikacjaWycen/AplikacjaWycenHome.png';

// --- DANE PROJEKTÓW ---
const projectsData = [
  {
    id: 1,
    title: 'Aplikacja bankowa',
    Icon: FaPiggyBank,
    iconColor: '#690DAD', // ZMIANA: Dodano kolor dla ikony
    description: `Technologie: React.js, TypeScript, MUI, JWT, Vitest, GitHub Pages, GitHub Actions.

Nowoczesna i bezpieczna aplikacja bankowa, rozwijana przy użyciu React.js oraz TypeScript.
Interfejs użytkownika został zbudowany z wykorzystaniem MUI, oferując responsywne i przyjazne dla użytkownika doświadczenie.
Autoryzacja obsługiwana za pomocą JWT. Testowanie przez Vitest. CI/CD przez GitHub Actions.

Aktualny rozwój: backend z Express/Nest.js, rozszerzenie testów, lepsza integracja JWT, automatyzacja.`,
    images: [BankingAppHomepage, BankingAppDashboard],
    githubUrl: 'https://github.com/MateuszMlodecki/Banking-app',
  },
  {
    id: 2,
    title: 'Aplikacja wycen i zarządzania procesem produkcji',
    Icon: FaIndustry,
    iconColor: '#cf2026', // ZMIANA: Dodano inny kolor, aby pokazać różnicę
    description: `Technologie: React.js, TypeScript, Vite, Material-UI, JWT, Axios, jsPDF, XLSX, Workbox, GitHub Actions.

Nowoczesna aplikacja webowa do wyceny i zarządzania procesem produkcji. Zbudowana w oparciu o React.js i TypeScript, z responsywnym interfejsem użytkownika opartym na Material-UI i Framer Motion.
Aplikacja wspiera autoryzację JWT, obsługę rysunków technicznych (upload PDF, podgląd, przypisanie do projektów), konfigurację cen materiałów i procesów oraz pełny kalkulator kosztów produkcji z eksportem do PDF i Excel.
Dodatkowo implementuje PWA z możliwością instalacji na urządzeniach oraz powiadomienia push dzięki Web Push API.

CI/CD realizowane jest poprzez GitHub Actions, a aplikacja wspiera nowoczesne mechanizmy cache i aktualizacji w oparciu o Workbox.

Aktualny rozwój: rozbudowa historii projektów i ofert, lepsze zarządzanie powiadomieniami push, automatyzacja procesów eksportu.`,
    images: [AplikacjaWcenHome],
  },
];

// --- KOMPONENT KARTY PROJEKTU ---
// ZMIANA: Dodano 'iconColor' do propsów z wartością domyślną
const ProjectCard = ({ title, description, images, githubUrl, Icon, iconColor = '#690DAD' }) => {
  const [showImages, setShowImages] = useState(false);
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const handleZoom = idx => {
    setZoomedIndex(zoomedIndex === idx ? null : idx);
  };

  const hasImages = images && images.length > 0;

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'transform 0.3s, box-shadow 0.4s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        },
      }}
    >
      <Icon
        style={{
          fontSize: 80,
          color: iconColor, // ZMIANA: Użycie dynamicznego koloru ikony
          marginBottom: 16,
        }}
      />
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        textAlign="justify"
        sx={{ mb: 3, maxWidth: 700, whiteSpace: 'pre-wrap' }}
      >
        {description}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mb: 3 }}>
        {hasImages && (
          <Button
            variant="contained"
            size="large"
            onClick={() => setShowImages(prev => !prev)}
            sx={{ px: 3, py: 1.5, borderRadius: 2, fontWeight: 'bold' }}
          >
            {showImages ? 'Ukryj podgląd' : 'Pokaż podgląd'}
          </Button>
        )}
        <Button
          variant="outlined"
          size="large"
          disabled={!githubUrl}
          sx={{
            px: 3,
            py: 1.5,
            borderRadius: 2,
            borderColor: 'black',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            textTransform: 'none',
            color: 'black',
          }}
          component={Link}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} color="black" />
          GitHub
        </Button>
      </Box>
      {showImages && hasImages && (
        <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={2} width="100%">
          {images.map((src, idx) => (
            <Box
              key={idx}
              onClick={() => handleZoom(idx)}
              sx={{
                position: 'relative',
                cursor: zoomedIndex === idx ? 'zoom-out' : 'zoom-in',
                borderRadius: '10px',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                transform: zoomedIndex === idx ? 'scale(1.4)' : 'scale(1)',
                zIndex: zoomedIndex === idx ? 10 : 1,
                boxShadow: zoomedIndex === idx ? '0 0 30px rgba(0, 0, 0, 0.6)' : 'none',
                width: '100%',
                maxWidth: '600px',
              }}
            >
              <Box
                component="img"
                src={src}
                alt={`${title} screenshot ${idx + 1}`}
                sx={{ width: '100%', height: 'auto', borderRadius: '10px', display: 'block' }}
              />
            </Box>
          ))}
        </Box>
      )}
    </Paper>
  );
};

// --- GŁÓWNY KOMPONENT SEKCJI ---
export const Projects = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 4,
        minHeight: '100vh',
        bgcolor: '#DDDDDD',
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 4, textAlign: 'center', fontSize: '3.2rem' }}
      >
        Moje Projekty
      </Typography>
      <Stack direction="column" spacing={4} sx={{ width: '100%', maxWidth: 1000 }}>
        {projectsData.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Stack>
    </Box>
  );
};
