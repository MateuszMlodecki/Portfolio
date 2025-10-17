import { Box, IconButton, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const scrollToSection = id => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const navItems = [
  { text: 'Strona Główna', icon: HomeIcon, to: 'home' },
  { text: 'Projekty', icon: WorkOutlineIcon, to: 'projects' },
  { text: 'O mnie', icon: FaUser, to: 'about' },
  { text: 'Kontakt', icon: MailOutlineIcon, to: 'contact' },
];

const paperStyles = {
  position: 'sticky',
  top: '280px',
  alignSelf: 'flex-start',
  height: 'fit-content',
  display: { xs: 'none', lg: 'flex' },
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: { xs: 2, md: 4 },
  width: '90px',
  flexShrink: 0,
  borderRadius: 16,
  p: { xs: 2, sm: 3, md: 4 },
  overflow: 'hidden',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(10px)',
  mt: { lg: 'calc(50vh - 200px)' },
};

const MotionIconButton = motion.create(IconButton);

export const NavigationSection = ({ pageBackground }) => {
  return (
    <Box sx={paperStyles}>
      {navItems.map(item => (
        <Tooltip key={item.text} title={item.text} placement="left" arrow>
          <Box
            onClick={() => scrollToSection(item.to)}
            sx={{
              position: 'relative',
              width: 60,
              height: 60,
              cursor: 'pointer',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                backgroundImage: pageBackground,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                boxShadow: 'inset 0px 5px 15px rgba(0,0,0,0.4)',
              }}
            />

            <MotionIconButton
              aria-label={item.text}
              sx={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                color: 'rgba(255, 255, 255, 0.85)',
              }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <item.icon />
            </MotionIconButton>
          </Box>
        </Tooltip>
      ))}
    </Box>
  );
};
