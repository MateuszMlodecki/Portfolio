import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import profilepic from '../images/avatar.png';
import Logo from '../images/Logo.png';

export const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#DDDDDD',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        p: 5,
      }}
    >
      <Box sx={{ mb: { xs: 0, md: 6 } }}>
        <img src={Logo} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          justifyContent: { md: 'space-between' },
          alignItems: { xs: 'center', md: 'flex-start' },
          width: '100%',
          maxWidth: '960px',
        }}
      >
        <Box
          sx={{
            flex: '1',
            p: 4,
            textAlign: { xs: 'center', md: 'left' },
            mt: { xs: 10, md: 0 },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Josephine Sans',
              fontSize: '24px',
              maxWidth: '600px',
              marginX: 'auto',
            }}
          >
            Jestem zmotywowanym początkującym deweloperem, zaangażowanym w tworzenie bezpiecznych i
            skalowalnych aplikacji. Obecnie pracuję nad nowoczesną aplikacją bankową, wykorzystując
            <b> React.js, TypeScript, MUI, JWT, Vitest, GitHub Pages oraz GitHub Actions.</b>
            Nieustannie rozwijam swoje umiejętności poprzez projekty własne oraz program
            mentoringowy.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: { xs: 8 },
            pb: 2,
            flex: '1',
          }}
        >
          <Avatar
            alt="Profile picture"
            src={profilepic}
            sx={{
              width: { xs: 250, md: 300 },
              height: { xs: 250, md: 300 },
              backgroundColor: '#f2f2f2',
            }}
          />
        </Box>
      </Box>
      <Box sx={{ paddingBottom: { xs: '140px', md: 0 } }} />
    </Box>
  );
};
