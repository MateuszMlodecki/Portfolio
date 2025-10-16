import { Box, IconButton, Tooltip } from '@mui/material';
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
  position: 'sticky',
  top: '300px',
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
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(10px)',
  mt: { lg: 'calc(50vh - 200px)' },
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
  const iconButtonStyles = createIconButtonStyles(pageBackground);

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
