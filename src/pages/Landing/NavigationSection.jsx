// Plik: NavigationSection.js

import React from 'react';
import { Box, IconButton, Tooltip, useTheme } from '@mui/material';

// Ikony
import HomeIcon from '@mui/icons-material/Home';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ArticleIcon from '@mui/icons-material/Article';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const navItems = [
  { text: 'Strona Główna', icon: HomeIcon, link: '#home' },
  { text: 'Projekty', icon: WorkOutlineIcon, link: '#projects' },
  { text: 'Blog', icon: ArticleIcon, link: '#blog' },
  { text: 'Kontakt', icon: MailOutlineIcon, link: '#contact' },
];

// Papier staje się niewidzialnym kontenerem do pozycjonowania
const paperStyles = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'column' },
  alignItems: 'center',
  gap: { xs: 2, md: 4 },
  width: '90px',
  maxWidth: '90px',
  borderRadius: 16,
  p: { xs: 2, sm: 3, md: 4 },
  overflow: 'hidden',
  backgroundColor: 'rgba(255, 255, 255, 0.85)', // Delikatnie przezroczyste tło papieru
  backdropFilter: 'blur(10px)', // Efekt "oszronionego szkła" dla lepszego wyglądu
};

// Funkcja generująca style dla przycisków, używająca tła z propsa
const createIconButtonStyles = pageBackground => ({
  width: { xs: 60, sm: 60, md: 60 },
  height: { xs: 60, sm: 60, md: 60 },
  // --- KLUCZOWY EFEKT ---
  // Używamy tła przekazanego przez prop
  backgroundImage: pageBackground,
  // Synchronizujemy wszystkie właściwości tła z rodzicem dla idealnej iluzji
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  boxShadow: 'inset 0px 5px 15px rgba(0,0,0,0.4)',
  color: 'rgba(255, 255, 255, 0.85)',
});

// Komponent teraz przyjmuje prop 'pageBackground'
export const NavigationSection = ({ pageBackground }) => {
  const theme = useTheme();
  // Generujemy dynamiczne style dla przycisków
  const iconButtonStyles = createIconButtonStyles(pageBackground, theme);

  return (
    <Box sx={paperStyles}>
      {navItems.map(item => (
        <Tooltip key={item.text} title={item.text} placement="left" arrow>
          <IconButton component="a" href={item.link} sx={iconButtonStyles} aria-label={item.text}>
            <item.icon />
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};
