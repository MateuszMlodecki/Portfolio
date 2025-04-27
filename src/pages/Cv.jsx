import React from 'react';
import { Box, Typography, Paper, Button, Stack } from '@mui/material';
import { FaFilePdf } from 'react-icons/fa';
import DownloadIcon from '@mui/icons-material/Download';

const CvPolski =
  'https://drive.google.com/file/d/14tBivoGIPO-gKy7KntfXhJlzyRoQpHRl/view?usp=drive_link';
const CvEnglish =
  'https://drive.google.com/file/d/1FxUNAhJR9aSSspKGzyAqu8b7Y-G434PB/view?usp=drive_link';

export const Cv = () => {
  const handleOpen = language => {
    const path = language === 'pl' ? CvPolski : CvEnglish;
    window.open(path, '_blank');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
        Pobierz moje CV
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={4}
        sx={{ width: '100%', maxWidth: 800, justifyContent: 'center' }}
      >
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            transition: 'transform 0.2s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            },
          }}
        >
          <FaFilePdf style={{ fontSize: 100, color: '#e53935', marginBottom: 16 }} />
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
            Wersja Polska
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Pobierz CV w języku polskim z pełnym opisem umiejętności i doświadczenia.
          </Typography>
          <Button
            variant="contained"
            color="error"
            size="large"
            startIcon={<DownloadIcon />}
            onClick={() => handleOpen('pl')}
            sx={{
              mt: 'auto',
              px: 3,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 'bold',
            }}
          >
            Otwórz CV (PL)
          </Button>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            flex: 1,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            transition: 'transform 0.2s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            },
          }}
        >
          <FaFilePdf style={{ fontSize: 100, color: '#1e88e5', marginBottom: 16 }} />
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
            English Version
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Download CV in English with a full description of skills and experience.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<DownloadIcon />}
            onClick={() => handleOpen('en')}
            sx={{
              mt: 'auto',
              px: 3,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 'bold',
            }}
          >
            Open CV (EN)
          </Button>
        </Paper>
      </Stack>
    </Box>
  );
};
