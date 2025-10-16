import Box from '@mui/material/Box';
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
            }}
          >
            <HeroSection pageBackground={backgroundStyleUrl} />
            <Box
              sx={{
                display: { xs: 'flex', lg: 'none' },
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white',
                textShadow: '0 0 5px black',
                animation: `${bounce} 2s infinite`,
                mt: 4,
              }}
            >
              <Box>Przewiń w dół</Box>
              <ArrowDownwardIcon />
            </Box>
          </Box>

          <Box sx={{ width: '100%' }}>
            <Projects />
          </Box>
        </Box>

        <NavigationSection pageBackground={backgroundStyleUrl} />
      </Box>
    </>
  );
};

export default HomePage;
