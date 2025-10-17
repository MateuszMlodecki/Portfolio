import { Typography, Paper, Button, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const contactData = [
  {
    href: 'mailto:mateuszmlodecki.it@gmail.com',
    icon: EmailIcon,
    label: 'E-mail',
    info: 'mateuszmlodecki.it@gmail.com',
    iconColor: 'rgba(255, 255, 255, 0.6)',
    buttonText: 'Napisz',
  },
  {
    href: 'tel:+48790277760',
    icon: PhoneIphoneIcon,
    label: 'Telefon',
    info: '+48 790 277 760',
    iconColor: 'rgba(255, 255, 255, 0.6)',
    buttonText: 'Zadzwoń',
  },
  {
    href: 'https://www.linkedin.com/in/mateusz-m%C5%82odecki-621104328/',
    icon: LinkedInIcon,
    label: 'LinkedIn',
    info: 'linkedin.com/in/mateusz-młodecki-621104328/',
    iconColor: 'rgba(255, 255, 255, 0.6)',
    buttonText: 'Odwiedź',
  },
  {
    href: 'https://wa.me/+48790277760',
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    info: '+48 790 277 760',
    iconColor: 'rgba(255, 255, 255, 0.6)',
    buttonText: 'Napisz',
  },
];

const mainPaperStyles = {
  marginTop: '80px',
  marginBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  width: '100%',
  minHeight: '100vh',
  borderRadius: 16,
  p: { xs: 3, sm: 4, md: 6 },
  overflow: 'hidden',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(10px)',
};

const contactCardStyle = {
  p: 3,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: 8,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(5px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.25), inset -4px -4px 8px rgba(255,255,255,0.4)',
  flex: {
    xs: '1 1 100%',
    sm: '1 1 calc(50% - 16px)',
  },
  minWidth: {
    xs: '100%',
    sm: '280px',
  },
  maxWidth: {
    xs: '100%',
    sm: '380px',
  },
};

const iconContainerStyle = {
  position: 'relative',
  width: 80,
  height: 80,
  flexShrink: 0,
  mb: 2,
};

const createBackgroundLayerStyle = pageBackground => ({
  position: 'absolute',
  inset: 0,
  borderRadius: '50%',
  backgroundImage: pageBackground,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: { xs: 'scroll', md: 'fixed' },
  boxShadow: 'inset 4px 4px 8px rgba(0, 0, 0, 0.4)',
});

const iconLayerStyle = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover svg': {
    transform: 'scale(1.15) rotate(5deg)',
    textShadow: '0 6px 12px rgba(0, 0, 0, 0.5)',
  },
};

const createIconStickerStyle = iconColor => ({
  fontSize: 40,
  color: iconColor,
  textShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
  transition: 'transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out',
  pointerEvents: 'none',
});

const ContactItem = ({ href, icon: Icon, label, info, iconColor, buttonText, pageBackground }) => {
  const backgroundLayerStyle = createBackgroundLayerStyle(pageBackground);
  const iconStickerStyle = createIconStickerStyle(iconColor);

  return (
    <Paper elevation={0} sx={contactCardStyle}>
      <Box sx={iconContainerStyle}>
        <Box sx={backgroundLayerStyle} />
        <Box sx={iconLayerStyle}>
          <Icon style={iconStickerStyle} />
        </Box>
      </Box>

      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ mb: 1, fontFamily: 'Josephine Sans, sans-serif' }}
      >
        {label}
      </Typography>

      {info && (
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            mb: 2,
            wordBreak: 'break-word',
            overflowWrap: 'anywhere',
            minHeight: '48px',
            fontSize: { xs: '0.9rem', sm: '1rem' },
          }}
        >
          {info}
        </Typography>
      )}

      {!info && <Box sx={{ minHeight: '48px', mb: 2 }} />}

      <Button
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        variant="outlined"
        sx={{
          mt: 'auto',
          borderColor: 'black',
          color: 'black',
          fontWeight: 'bold',
          '&:hover': {
            borderColor: 'black',
            backgroundColor: 'rgba(0,0,0,0.08)',
          },
        }}
        aria-label={info ? `Skontaktuj się przez ${label}` : `Odwiedź profil ${label}`}
      >
        {buttonText}
      </Button>
    </Paper>
  );
};

export const Contact = ({ pageBackground }) => {
  return (
    <Paper sx={mainPaperStyles} elevation={4}>
      <Typography
        variant="h4"
        component="h2"
        fontWeight="bold"
        sx={{ mb: { xs: 3, md: 5 }, textAlign: 'center', fontFamily: 'Josephine Sans, sans-serif' }}
      >
        Skontaktuj się ze mną
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
          alignItems: 'stretch',
          width: '100%',
          maxWidth: '840px',
        }}
      >
        {contactData.map(item => (
          <ContactItem key={item.label} {...item} pageBackground={pageBackground} />
        ))}
      </Box>
    </Paper>
  );
};
