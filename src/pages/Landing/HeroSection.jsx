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
  p: { xs: 2, sm: 3, md: 4 },
  overflow: 'hidden',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(10px)',
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
  backgroundAttachment: 'fixed',
  flexShrink: 0,
  boxShadow: `
    inset 8px 8px 12px rgba(0, 0, 0, 0.6), 
    inset -8px -8px 12px rgba(255, 255, 255, 0.7)
  `,
});

export const HeroSection = ({ pageBackground }) => {
  const avatarStyles = createAvatarStyles(pageBackground);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          position: 'absolute',
          top: 0,
          transform: 'translateY(calc(-100% - 16px))',
          fontWeight: 'bold',
          color: 'white',
          textShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
          textAlign: 'center',
          fontFamily: 'Josephine Sans, sans-serif',
        }}
      >
        Mateusz Młodecki
      </Typography>

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
            Nieustannie rozwijam swoje umiejętności poprzez projekty własne oraz program
            mentoringowy.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
