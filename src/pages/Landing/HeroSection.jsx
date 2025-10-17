import { Avatar, Box, Typography, Paper } from '@mui/material';
import profilepic from '../../images/avatar.png';

const paperStyles = {
  display: 'flex',
  flexDirection: { xs: 'column-reverse', lg: 'row' },
  alignItems: 'center',
  gap: { xs: 2, md: 4 },
  minHeight: '400px',
  width: '100%',
  borderRadius: 16,
  p: { xs: 4, sm: 6, md: 8 },
  overflow: 'hidden',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(10px)',
  marginTop: { xs: '90px' },
};

const textContentStyles = {
  textAlign: { xs: 'center', md: 'left' },
  flex: '1 1 60%',
};

const typographyStyles = {
  fontFamily: 'Josephine Sans, sans-serif',
  fontSize: 'clamp(18px, 4vw, 24px)',
};

const createAvatarStyles = pageBackground => ({
  width: { xs: 200, sm: 250, md: 300 },
  height: { xs: 200, sm: 250, md: 300 },
  backgroundImage: pageBackground,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: { xs: 'scroll', md: 'fixed' },
  flexShrink: 0,
  boxShadow: `
    inset 6px 6px 10px rgba(0, 0, 0, 0.5), 
    inset -6px -6px 12px rgba(0, 0, 0, 0.3)
  `,
});

export const HeroSection = ({ pageBackground }) => {
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
    </Paper>
  );
};
