// Plik: HeroSection.js

import React from 'react';
import { Avatar, Box, Typography, Paper } from '@mui/material';
import profilepic from '../../images/avatar.png'; // Upewnij się, że ścieżka jest poprawna

// Style, które są statyczne, mogą pozostać na zewnątrz
const paperStyles = {
  display: 'flex',
  flexDirection: { xs: 'column-reverse', md: 'row' },
  alignItems: 'center',
  gap: { xs: 2, md: 4 },
  width: '100%',
  maxWidth: '960px',
  borderRadius: 16,
  p: { xs: 2, sm: 3, md: 4 },
  overflow: 'hidden',
  backgroundColor: 'rgba(255, 255, 255, 0.85)', // Delikatnie przezroczyste tło papieru
  backdropFilter: 'blur(10px)', // Efekt "oszronionego szkła" dla lepszego wyglądu
};

const textContentStyles = {
  textAlign: { xs: 'center', md: 'left' },
  flex: '1 1 60%',
  minWidth: 300,
};

const typographyStyles = {
  fontFamily: 'Josephine Sans, sans-serif',
  fontSize: 'clamp(18px, 4vw, 24px)',
};

const avatarContainerStyles = {
  flex: '1 0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

// Ponieważ styl awatara zależy od propa, tworzymy funkcję, która go generuje
const createAvatarStyles = pageBackground => ({
  width: { xs: 200, sm: 250, md: 300 },
  height: { xs: 200, sm: 250, md: 300 },
  // --- KLUCZOWY EFEKT ---
  // Używamy tła przekazanego przez prop
  backgroundImage: pageBackground,
  // Synchronizujemy wszystkie właściwości tła z rodzicem dla idealnej iluzji
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  boxShadow: 'inset 0px 5px 15px rgba(0,0,0,0.4)',
});

// 1. Komponent teraz przyjmuje prop 'pageBackground'
export const HeroSection = ({ pageBackground }) => {
  // 2. Generujemy dynamiczny styl dla awatara wewnątrz komponentu
  const avatarStyles = createAvatarStyles(pageBackground);

  return (
    <Paper sx={paperStyles} elevation={4}>
      <Avatar alt="Profile picture" src={profilepic} sx={avatarStyles} />

      <Box sx={textContentStyles}>
        <Typography variant="body1" sx={typographyStyles}>
          Jestem zmotywowanym początkującym programistą, zaangażowanym w tworzenie bezpiecznych i
          skalowalnych aplikacji. Obecnie pracuję nad nowoczesną aplikacją bankową, wykorzystując
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            {' '}
            React.js, TypeScript, MUI, JWT, Vitest, GitHub Pages oraz GitHub Actions.
          </Box>{' '}
          Nieustannie rozwijam swoje umiejętności poprzez projekty własne oraz program mentoringowy.
        </Typography>
      </Box>
      <Box sx={avatarContainerStyles}>{/* 3. Używamy wygenerowanego stylu */}</Box>
    </Paper>
  );
};
