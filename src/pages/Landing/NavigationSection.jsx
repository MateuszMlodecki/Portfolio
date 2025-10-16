import { Box, IconButton, Tooltip, useTheme } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { FaUser } from 'react-icons/fa';

const navItems = [
  { text: 'Strona Główna', icon: HomeIcon, link: '#home' },
  { text: 'Projekty', icon: WorkOutlineIcon, link: '#projects' },
  { text: 'O mnie', icon: FaUser, link: '#about' },
  { text: 'Kontakt', icon: MailOutlineIcon, link: '#contact' },
];

const paperStyles = {
  display: { xs: 'none', lg: 'flex' }, // ZMIANA: z 'md' na 'lg'
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: { xs: 2, md: 4 }, // md tutaj może zostać, bo wpływa tylko na odstępy
  width: '90px',
  flexShrink: 0,
  borderRadius: 16,
  p: { xs: 2, sm: 3, md: 4 }, // te również mogą zostać, bo definiują padding na różnych rozmiarach
  overflow: 'hidden',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(10px)',
};

const createIconButtonStyles = pageBackground => ({
  width: { xs: 60, sm: 60, md: 60 },
  height: { xs: 60, sm: 60, md: 60 },
  backgroundImage: pageBackground,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  boxShadow: 'inset 0px 5px 15px rgba(0,0,0,0.4)',
  color: 'rgba(255, 255, 255, 0.85)',
});

export const NavigationSection = ({ pageBackground }) => {
  const theme = useTheme();
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
