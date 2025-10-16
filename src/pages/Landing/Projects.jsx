import { useState } from 'react';
import { Box, Typography, Stack, Paper, Button, Link, IconButton } from '@mui/material';
import { FaPiggyBank, FaGithub, FaIndustry } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import BankingAppHomepage from '../../images/BankingApp/BankingAppHomepage.png';
import BankingAppDashboard from '../../images/BankingApp/BankingAppDashboard.png';
import AplikacjaWcenHome from '../../images/AplikacjaWycen/AplikacjaWycenHome.png';

const glassmorphicPaperStyle = {
  width: '100%',
  borderRadius: 16,
  p: { xs: 2, sm: 3, md: 4 },
  overflow: 'hidden',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
  display: 'flex',
  alignItems: 'center',
  gap: { xs: 2, lg: 4 },
};

const projectsData = [
  {
    id: 1,
    title: 'Aplikacja bankowa',
    Icon: FaPiggyBank,
    iconColor: '#690DAD',
    description: `Technologie: React.js, TypeScript, MUI, JWT, Vitest, GitHub Pages, GitHub Actions.\n\nNowoczesna i bezpieczna aplikacja bankowa, rozwijana przy użyciu React.js oraz TypeScript. Interfejs użytkownika został zbudowany z wykorzystaniem MUI, oferując responsywne i przyjazne dla użytkownika doświadczenie.\n\nAutoryzacja obsługiwana za pomocą JWT. Testowanie przez Vitest. CI/CD przez GitHub Actions.`,
    images: [BankingAppHomepage, BankingAppDashboard],
    githubUrl: 'https://github.com/MateuszMlodecki/Banking-app',
  },
  {
    id: 2,
    title: 'Aplikacja wycen i zarządzania procesem produkcji',
    Icon: FaIndustry,
    iconColor: '#cf2026',
    description: `Technologie: React.js, TypeScript, Vite, Material-UI, JWT, Axios, jsPDF, XLSX, Workbox, GitHub Actions.\n\nNowoczesna aplikacja webowa do wyceny i zarządzania procesem produkcji. Zbudowana w oparciu o React.js i TypeScript, z responsywnym interfejsem na Material-UI i Framer Motion. Aplikacja wspiera autoryzację JWT, obsługę rysunków technicznych, konfigurację cen oraz pełny kalkulator kosztów produkcji z eksportem do PDF i Excel.\n\nImplementuje PWA oraz powiadomienia push. CI/CD realizowane jest poprzez GitHub Actions.`,
    images: [AplikacjaWcenHome],
  },
];

const ImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex(prev => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex(prev => (prev - 1 + images.length) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 8,
        flexShrink: 0,
        '&:hover .nav-button': { opacity: 0.7 },
      }}
    >
      <Box
        component="img"
        src={images[currentIndex]}
        alt={`${title} screenshot ${currentIndex + 1}`}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.5s ease-in-out',
        }}
      />
      {images.length > 1 && (
        <>
          <IconButton
            className="nav-button"
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 8,
              transform: 'translateY(-50%)',
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              opacity: 0,
              transition: 'opacity 0.3s',
              '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.8)' },
            }}
          >
            <IoIosArrowBack />
          </IconButton>
          <IconButton
            className="nav-button"
            onClick={handleNext}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 8,
              transform: 'translateY(-50%)',
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              opacity: 0,
              transition: 'opacity 0.3s',
              '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.8)' },
            }}
          >
            <IoIosArrowForward />
          </IconButton>
        </>
      )}
    </Box>
  );
};

const ProjectCard = ({ title, description, images, githubUrl, Icon, iconColor }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        ...glassmorphicPaperStyle,
        flexDirection: { xs: 'column', lg: 'row' },
      }}
    >
      <Box sx={{ flex: '1 1 55%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Icon style={{ fontSize: 40, color: iconColor }} />
          <Typography variant="h5" fontWeight="bold">
            {title}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ flexGrow: 1, whiteSpace: 'pre-wrap' }}>
          {description}
        </Typography>
        {githubUrl && (
          <Button
            variant="outlined"
            size="large"
            sx={{
              mt: 3,
              alignSelf: { xs: 'center', lg: 'flex-start' },
              borderColor: 'black',
              fontWeight: 'bold',
              color: 'black',
              '&:hover': { borderColor: 'black', backgroundColor: 'rgba(0,0,0,0.04)' },
            }}
            component={Link}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<FaGithub />}
          >
            Zobacz na GitHub
          </Button>
        )}
      </Box>

      <Box sx={{ flex: '1 1 45%', minHeight: { xs: 250, sm: 300, lg: 'auto' } }}>
        <ImageSlider images={images} title={title} />
      </Box>
    </Paper>
  );
};

export const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ mb: 6, color: 'white', textShadow: '1px 1px 3px black' }}
      >
        Moje Projekty
      </Typography>
      <Stack direction="column" spacing={6} sx={{ width: '100%' }}>
        {projectsData.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Stack>
    </Box>
  );
};
