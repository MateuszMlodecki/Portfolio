// Plik: HomePage.js

import React from 'react';
import Box from '@mui/material/Box';
import backgroundImg from '../../background_portfolio.png';
import { HeroSection } from './HeroSection';
import { NavigationSection } from './NavigationSection';

const HomePage = () => {
  const backgroundStyle = `url(${backgroundImg})`;

  return (
    <Box
      sx={{
        // ... (style tła strony bez zmian)
        backgroundImage: backgroundStyle,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Box
        sx={{
          // ... (style głównego kontenera layoutu bez zmian)
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'stretch' },
          gap: 2,
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        <Box sx={{ flex: '1 1 auto', minWidth: 0 }}>
          <HeroSection pageBackground={backgroundStyle} />
        </Box>

        {/* Przekazujemy prop tła również do nawigacji */}
        <NavigationSection pageBackground={backgroundStyle} />
      </Box>
    </Box>
  );
};

export default HomePage;
