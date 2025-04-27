import React from 'react';
import { Box, Typography, Paper, Button, Stack, Tooltip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactItem = ({ href, icon: Icon, label, info, iconColor, tooltip }) => (
  <Paper
    elevation={3}
    sx={{
      p: 3, // Scaled from 2.3
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      transition: 'transform 0.2s, box-shadow 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
      },
      width: { xs: '100%', md: '260px', lg: '300px' }, // Target 300px on lg
      maxWidth: { xs: '390px', lg: '330px' }, // Scaled proportionally
    }}
  >
    <Icon sx={{ fontSize: 75, color: iconColor, mb: 1.5 }} /> {/* Scaled from 57.5 */}
    <Typography variant="h6" fontWeight="bold" sx={{ mb: 1.5, fontSize: '1.875rem' }}>
      {/* Scaled from 1.4375rem */}
      {label}
    </Typography>
    {info && (
      <Tooltip title={tooltip || info} arrow>
        <Button
          href={href}
          target="_blank"
          variant="outlined"
          color="primary"
          sx={{
            mt: 1.5, // Scaled from 1.15
            px: 3, // Scaled from 2.3
            py: 0.75, // Scaled from 0.575
            borderRadius: 2,
            fontWeight: 'bold',
            textTransform: 'none',
            fontSize: '1.275rem', // Scaled from 0.9775rem
            maxWidth: '100%',
          }}
          aria-label={
            label === 'Telefon' ? `Zadzwoń na numer ${info}` : `Wyślij e-mail na ${tooltip || info}`
          }
        >
          {info}
        </Button>
      </Tooltip>
    )}
    {!info && (
      <Button
        href={href}
        target="_blank"
        variant="contained"
        color="primary"
        sx={{
          mt: 1.5, // Scaled from 1.15
          px: 3, // Scaled from 2.3
          py: 0.75, // Scaled from 0.575
          borderRadius: 2,
          fontWeight: 'bold',
          textTransform: 'none',
          fontSize: '1.275rem', // Scaled from 0.9775rem
        }}
        aria-label={`Przejdź do ${label}`}
      >
        Przejdź
      </Button>
    )}
  </Paper>
);

export const Contact = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6, // Scaled from 4.6
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 6, textAlign: 'center', fontSize: '3.2rem' }}
      >
        {/* Scaled from 2.4375rem */}
        Skontaktuj się ze mną
      </Typography>
      <Stack
        direction={{ xs: 'column', lg: 'column' }}
        spacing={4.5} // Scaled from 3.45
        sx={{
          width: '100%',
          maxWidth: { xs: 400, md: 900, lg: 750 }, // Scaled lg from 600 to fit 2x300px cards + spacing
          alignItems: 'center',
        }}
      >
        {/* Top Row */}
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={4.5} // Scaled from 3.45
          sx={{
            justifyContent: { xs: 'center', lg: 'space-evenly' },
            alignItems: 'center',
            width: '100%',
          }}
        >
          <ContactItem
            href="tel:+48790277760"
            icon={PhoneIphoneIcon}
            label="Telefon"
            info="+48 790 277 760"
            iconColor="#e53935"
          />
          <ContactItem
            href="mailto:mateuszmlodecki.it@gmail.com"
            icon={EmailIcon}
            label="E-mail"
            info="mateuszmlodecki@..."
            tooltip="mateuszmlodecki.it@gmail.com"
            iconColor="#f57c00"
          />
        </Stack>
        {/* Bottom Row */}
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={4.5} // Scaled from 3.45
          sx={{
            justifyContent: { xs: 'center', lg: 'space-evenly' },
            alignItems: 'center',
            width: '100%',
          }}
        >
          <ContactItem
            href="https://www.linkedin.com/in/mateusz-m%C5%82odecki-621104328/"
            icon={LinkedInIcon}
            label="LinkedIn"
            iconColor="#1e88e5"
          />
          <ContactItem
            href="https://wa.me/+48790277760"
            icon={WhatsAppIcon}
            label="WhatsApp"
            iconColor="#25D366"
          />
        </Stack>
      </Stack>
    </Box>
  );
};
