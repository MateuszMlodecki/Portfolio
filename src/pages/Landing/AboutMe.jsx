import { Box, Typography, Paper, Stack, Button } from '@mui/material';
import { FaFilePdf } from 'react-icons/fa';
import DownloadIcon from '@mui/icons-material/Download';
// --- Logika CV (bez zmian) ---
const CvPolski =
  'https://drive.google.com/file/d/14tBivoGIPO-gKy7KntfXhJlzyRoQpHRl/view?usp=drive_link';
const CvEnglish =
  'https://drive.google.com/file/d/1FxUNAhJR9aSSspKGzyAqu8b7Y-G434PB/view?usp=drive_link';

const handleOpen = language => {
  const path = language === 'pl' ? CvPolski : CvEnglish;
  window.open(path, '_blank');
};
// ----------------------------

const paperStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: 4,
  width: '100%',
  borderRadius: 16,
  p: { xs: 2, sm: 6, md: 8 },
  overflow: 'hidden',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(10px)',
  marginTop: '80px',
  marginBottom: '50px',
};

const textContentStyles = {
  textAlign: 'left',
};

const typographyStyles = {
  fontFamily: 'Josephine Sans, sans-serif',
  fontSize: 'clamp(18px, 4vw, 24px)',
  lineHeight: 1.6,
};

// --- ZMIANA: Usunięcie `transform` z hovera na karcie ---
// Zamiast tego dodajemy subtelny cień dla lepszego feedbacku
const cvCardStyle = {
  flex: 1,
  p: 3,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: '12px',
  // Dodajemy bazowy cień i transition dla niego
};

// --- Style dla ikony (bez zmian) ---
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
  backgroundAttachment: 'fixed',
  boxShadow: 'inset 4px 4px 8px rgba(0, 0, 0, 0.4)',
});

const iconLayerStyle = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer', // Dodajemy kursor, aby zachęcić do interakcji
  '&:hover svg': {
    transform: 'scale(1.15) rotate(5deg)',
    textShadow: '0 6px 12px rgba(0, 0, 0, 0.5)',
  },
};

const iconStickerStyle = {
  fontSize: 40,
  color: 'rgba(255, 255, 255, 0.6)',
  textShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
  transition: 'transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out',
  pointerEvents: 'none', // Zapobiega "kradzieży" hovera przez samą ikonę z warstwy nadrzędnej
};
// ------------------------------------

export const AboutMe = ({ pageBackground }) => {
  const backgroundLayerStyle = createBackgroundLayerStyle(pageBackground);

  return (
    <Paper sx={paperStyles} elevation={4}>
      {/* --- Sekcja tekstowa "O mnie" (bez zmian) --- */}
      <Box sx={textContentStyles}>
        <Typography variant="body1" sx={typographyStyles}>
          W swojej pracy stawiam na <strong>czysty kod</strong>,{' '}
          <strong>czytelną architekturę</strong> oraz
          <strong> ciągłe doskonalenie</strong>. Dobrze czuję się w pracy z technologiami
          frontendowymi — od
          <strong> HTML5</strong>, <strong>CSS3</strong> i <strong>JavaScriptu</strong>, po{' '}
          <strong>React</strong>,<strong> Tailwind CSS</strong>, <strong>Redux</strong> czy{' '}
          <strong>REST API</strong>.
        </Typography>
        <Typography variant="body1" sx={{ ...typographyStyles, mt: 2 }}>
          Chętnie uczę się też nowych narzędzi i bibliotek, by lepiej rozumieć pełny proces
          tworzenia aplikacji. Wierzę, że najlepsze projekty powstają dzięki połączeniu technologii,
          dobrych praktyk i pracy zespołowej.
        </Typography>
        <Typography variant="body1" sx={{ ...typographyStyles, mt: 2 }}>
          Oprócz umiejętności technicznych, cenię <strong>komunikatywność</strong>,
          <strong> współpracę zespołową</strong> i <strong>otwartość na feedback</strong>. Posługuję
          się językiem angielskim na poziomie <strong>B1</strong>, a prywatnie interesuję się{' '}
          <strong>produktami Apple</strong>, <strong>japońską motoryzacją</strong> oraz
          <strong> rozwojem osobistym</strong>.
        </Typography>
      </Box>

      {/* --- Sekcja CV (logika bez zmian, style zaktualizowane) --- */}
      <Box sx={{ pt: 2 }}>
        <Typography
          variant="h5"
          component="h3"
          fontWeight="bold"
          sx={{ mb: 3, textAlign: 'center', fontFamily: 'Josephine Sans, sans-serif' }}
        >
          Pobierz moje CV
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          sx={{ justifyContent: 'center' }}
        >
          {/* Karta CV - Wersja Polska */}
          <Box sx={cvCardStyle}>
            <Box onClick={() => handleOpen('pl')} sx={iconContainerStyle}>
              <Box sx={backgroundLayerStyle} />
              <Box sx={iconLayerStyle}>
                <FaFilePdf style={iconStickerStyle} />
              </Box>
            </Box>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1.5 }}>
              Wersja Polska
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, flexGrow: 1 }}>
              CV z pełnym opisem umiejętności i doświadczenia w języku polskim.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              startIcon={<DownloadIcon />}
              onClick={() => handleOpen('pl')}
              sx={{
                borderColor: 'black',
                color: 'black',
                fontWeight: 'bold',
                '&:hover': { borderColor: 'black', backgroundColor: 'rgba(0,0,0,0.08)' },
              }}
            >
              Otwórz (PL)
            </Button>
          </Box>

          {/* Karta CV - Wersja Angielska */}
          <Box sx={cvCardStyle}>
            <Box onClick={() => handleOpen('en')} sx={iconContainerStyle}>
              <Box sx={backgroundLayerStyle} />
              <Box sx={iconLayerStyle}>
                <FaFilePdf style={iconStickerStyle} />
              </Box>
            </Box>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1.5 }}>
              English Version
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, flexGrow: 1 }}>
              CV with a full description of skills and experience in English.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              startIcon={<DownloadIcon />}
              onClick={() => handleOpen('en')}
              sx={{
                borderColor: 'black',
                color: 'black',
                fontWeight: 'bold',
                '&:hover': { borderColor: 'black', backgroundColor: 'rgba(0,0,0,0.08)' },
              }}
            >
              Open (EN)
            </Button>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
};
