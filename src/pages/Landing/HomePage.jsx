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
  const backgroundStyle = `url(${backgroundImg})`;

  return (
    <Box
      sx={{
        backgroundImage: backgroundStyle,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // KLUCZOWA WŁAŚCIWOŚĆ: sprawia, że tło jest "przyklejone" do okna przeglądarki i nie przewija się z treścią
        backgroundAttachment: 'fixed',
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <NavigationSection pageBackground={backgroundStyle} />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          py: 2,
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
            maxWidth: '1200px',
            px: 2,
          }}
        >
          <HeroSection pageBackground={backgroundStyle} />

          <Box
            sx={{
              display: { xs: 'flex', lg: 'none' },
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white',
              textShadow: '0 0 5px black',
              animation: `${bounce} 2s infinite`,
              mt: 2,
            }}
          >
            <Box>Przewiń w dół</Box>
            <ArrowDownwardIcon />
          </Box>
        </Box>

        <Box sx={{ width: '100%', maxWidth: '1200px', px: 2 }}>
          <Projects />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
