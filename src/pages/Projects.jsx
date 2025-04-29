import React, { useState } from 'react';
import { Box, Typography, Stack, Paper, Button, Link } from '@mui/material';
import { FaPiggyBank, FaGithub } from 'react-icons/fa';
import BankingAppHomepage from '../images/BankingAppHomepage.png';
import BankingAppDashboard from '../images/BankingAppDashboard.png';

const ProjectCard = ({ title, description, images, githubUrl }) => {
  const [showImages, setShowImages] = useState(false);
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const handleZoom = idx => {
    setZoomedIndex(zoomedIndex === idx ? null : idx);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        flex: 1,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'transform 0.3s, box-shadow 0.4s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        },
        position: 'relative',
      }}
    >
      <FaPiggyBank
        style={{
          fontSize: 80,
          color: '#690DAD',
          marginBottom: 16,
          transition: '0.3s',
        }}
      />

      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        {title}
      </Typography>

      <Typography variant="body1" textAlign="justify" sx={{ mb: 3, maxWidth: 700 }}>
        {description}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mb: 3 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => setShowImages(prev => !prev)}
          sx={{
            px: 3,
            py: 1.5,
            borderRadius: 2,
            fontWeight: 'bold',
            transition: '0.3s',
          }}
        >
          {showImages ? 'Ukryj zdjęcia' : 'Pokaż zdjęcia'}
        </Button>

        <Button
          variant="outlined"
          size="large"
          sx={{
            px: 3,
            py: 1.5,
            borderRadius: 2,
            borderColor: 'black',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            transition: '0.3s',
            textTransform: 'none',
            color: 'black',
          }}
          component={Link}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} color="black" />
          GitHub
        </Button>
      </Box>

      {showImages && (
        <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={2}>
          {images.map((src, idx) => (
            <Box
              key={idx}
              onClick={() => handleZoom(idx)}
              sx={{
                position: 'relative',
                cursor: zoomedIndex === idx ? 'zoom-out' : 'zoom-in',
                overflow: 'hidden',
                borderRadius: '10px',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                transform: zoomedIndex === idx ? 'scale(1.4)' : 'scale(1)',
                zIndex: zoomedIndex === idx ? 10 : 1,
                boxShadow:
                  zoomedIndex === idx ? '0 0 30px rgba(0, 0, 0, 0.6)' : '0 0 0 transparent',
                width: '100%',
                maxWidth: '600px',
              }}
            >
              <Box
                component="img"
                src={src}
                alt={`${title} screenshot ${idx + 1}`}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  display: 'block',
                  transition: '0.4s ease-in-out',
                }}
              />
            </Box>
          ))}
        </Box>
      )}
    </Paper>
  );
};

export const Projects = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 4,
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 4, textAlign: 'center', fontSize: '3.2rem' }}
      >
        Moje Projekty
      </Typography>

      <Stack direction="column" spacing={4} sx={{ width: '100%', maxWidth: 1000 }}>
        <ProjectCard
          title="Aplikacja Bankowa"
          description={`Technologie: React.js, TypeScript, MUI, JWT, Vitest, GitHub Pages, GitHub Actions
Nowoczesna i bezpieczna aplikacja bankowa, rozwijana przy użyciu React.js oraz TypeScript.
Interfejs użytkownika został zbudowany z wykorzystaniem MUI, oferując responsywne i przyjazne dla użytkownika doświadczenie.
Autoryzacja obsługiwana za pomocą JWT. Testowanie przez Vitest. CI/CD przez GitHub Actions.

Aktualny rozwój: backend z Express/Nest.js, rozszerzenie testów, lepsza integracja JWT, automatyzacja.`}
          images={[BankingAppHomepage, BankingAppDashboard]}
          githubUrl="https://github.com/MateuszMlodecki/Banking-app"
        />
      </Stack>
    </Box>
  );
};
