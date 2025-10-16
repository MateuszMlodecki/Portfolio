import { Box, Typography } from '@mui/material';
import backgroundImg from '../../background_portfolio.png';
import { HeroSection } from './HeroSection';
import { NavigationSection } from './NavigationSection';
import { Projects } from './Projects';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { keyframes } from '@mui/system';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const HomePage = () => {
  const backgroundStyleUrl = `url(${backgroundImg})`;

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: backgroundStyleUrl,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 4,
          maxWidth: '1400px',
          mx: 'auto',
          p: { xs: 1, sm: 2 },
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            width: '100%',
          }}
        >
          <Box
            id="home"
            sx={{
              minHeight: '100vh',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative', // <-- KROK 1: Dodaj to, aby stać się kontekstem pozycjonowania
            }}
          >
            <HeroSection pageBackground={backgroundStyleUrl} />

            {/* KROK 2: Zaktualizuj stylizację wskaźnika "Przewiń w dół" */}
            <Box
              sx={{
                position: 'absolute', // Wyjmij z normalnego przepływu
                bottom: 40, // Umieść 40px od dolnej krawędzi kontenera "home"
                left: '50%', // Wyśrodkuj w poziomie
                transform: 'translateX(-50%)', // Dokładne wyśrodkowanie w poziomie
                display: { xs: 'flex', lg: 'flex' },
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white',
                mx: 'auto',
                textShadow: '0 0 5px black',
                animation: `${bounce} 2s infinite`,
                // mt: 4 już nie jest potrzebne
              }}
            >
              <Box>Przewiń w dół</Box>
              <ArrowDownwardIcon />
            </Box>
          </Box>

          <Box sx={{ width: '100%' }}>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ mb: 6, color: 'white', textShadow: '1px 1px 3px black' }}
            >
              Moje Projekty
            </Typography>
            <Projects />
          </Box>
        </Box>

        <NavigationSection pageBackground={backgroundStyleUrl} />
      </Box>
    </>
  );
};

export default HomePage;
