import React from 'react';
import { Typography, Paper, Button, Stack, Tooltip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// --- STYLE ---

// Styl głównego kontenera - taki sam jak w AboutMe
const mainPaperStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  width: '100%',
  minHeight: '100vh',
  borderRadius: { xs: 0, sm: 16 }, // Na małych ekranach bez zaokrąglenia
  p: { xs: 3, sm: 4, md: 6 },
  overflow: 'hidden',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(10px)',
  marginTop: '100px',
};

// Nowy styl dla kart kontaktowych w stylu "glass"
const contactCardStyle = {
  p: 3,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: '12px',
  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Lekko widoczne tło
  backdropFilter: 'blur(5px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
  },
  width: { xs: '100%', sm: '280px' }, // Uproszczona responsywność
  maxWidth: '350px',
};

// --- KOMPONENTY ---

const ContactItem = ({ href, icon: Icon, label, info, iconColor, tooltip }) => (
  <Paper elevation={0} sx={contactCardStyle}>
    <Icon sx={{ fontSize: 64, color: iconColor, mb: 2 }} />
    <Typography
      variant="h6"
      fontWeight="bold"
      sx={{ mb: 1, fontFamily: 'Josephine Sans, sans-serif', flexGrow: 1 }}
    >
      {label}
    </Typography>
    {info && (
      <Tooltip title={tooltip || info} arrow>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            mb: 2,
            wordBreak: 'break-all',
          }}
        >
          {info}
        </Typography>
      </Tooltip>
    )}
    <Button
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant="outlined"
      sx={{
        mt: 'auto', // Wypycha przycisk na dół karty
        borderColor: 'black',
        color: 'black',
        fontWeight: 'bold',
        '&:hover': {
          borderColor: 'black',
          backgroundColor: 'rgba(0,0,0,0.08)',
        },
      }}
      aria-label={
        info
          ? `Skontaktuj się przez ${label} pod adresem ${tooltip || info}`
          : `Odwiedź profil ${label}`
      }
    >
      {info ? 'Napisz' : 'Odwiedź'}
    </Button>
  </Paper>
);

export const Contact = () => {
  return (
    <Paper sx={mainPaperStyles} elevation={4}>
      <Typography
        variant="h4"
        component="h2"
        fontWeight="bold"
        sx={{
          mb: { xs: 3, md: 5 },
          textAlign: 'center',
          fontFamily: 'Josephine Sans, sans-serif',
        }}
      >
        Skontaktuj się ze mną
      </Typography>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        sx={{
          justifyContent: 'center',
          alignItems: 'stretch', // Wyrównuje wysokość kart
          flexWrap: 'wrap', // Pozwala kartom zawijać się w razie potrzeby
        }}
      >
        <ContactItem
          href="mailto:mateuszmlodecki.it@gmail.com"
          icon={EmailIcon}
          label="E-mail"
          info="m...it@gmail.com" // Skrócona wersja
          tooltip="mateuszmlodecki.it@gmail.com"
          iconColor="#c71610"
        />
        <ContactItem
          href="tel:+48790277760"
          icon={PhoneIphoneIcon}
          label="Telefon"
          info="+48 790 277 760"
          iconColor="#333"
        />
        <ContactItem
          href="https://www.linkedin.com/in/mateusz-m%C5%82odecki-621104328/"
          icon={LinkedInIcon}
          label="LinkedIn"
          iconColor="#0A66C2"
        />
        <ContactItem
          href="https://wa.me/+48790277760"
          icon={WhatsAppIcon}
          label="WhatsApp"
          iconColor="#25D366"
        />
      </Stack>
    </Paper>
  );
};
