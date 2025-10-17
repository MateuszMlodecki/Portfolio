import { Box, Typography } from '@mui/material';
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

export const SectionWrapper = ({
  id,
  title,
  children,
  scrollToId,
  scrollToText,
  scrollToSection,
}) => {
  return (
    <Box
      id={id}
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        py: 12,
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          textAlign: { xs: 'center' },
          mx: 'auto',
          marginTop: '-20px',
          top: { xs: 24, md: 40 },
          fontWeight: 'bold',
          color: 'white',
          textShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
          fontFamily: 'Josephine Sans, sans-serif',
        }}
      >
        {title}
      </Typography>
      {children}

      {scrollToId && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'white',
            textShadow: '0 0 5px black',
            animation: `${bounce} 2s infinite`,
            cursor: 'pointer',
          }}
          onClick={() => scrollToSection(scrollToId)}
        >
          <Box>{scrollToText}</Box>
          <ArrowDownwardIcon />
        </Box>
      )}
    </Box>
  );
};
