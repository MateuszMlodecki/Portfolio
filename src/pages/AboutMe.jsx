import React from 'react';
import { Box, Typography, Stack, Paper, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const AboutMe = () => {
  const skills = [
    { skill: 'HTML5' },
    { skill: 'CSS3' },
    { skill: 'JavaScript' },
    { skill: 'TypeScript' },
    { skill: 'React.JS' },
    { skill: 'Tailwind CSS' },
    { skill: 'Material UI' },
    { skill: 'Git i Github' },
    { skill: 'Responsywny Web Design' },
    { skill: 'Zarządzanie stanem (Redux, Context API)' },
    { skill: 'API (REST, GraphQL)' },
  ];

  const additionalSkills = [
    { skill: 'Język angielski B1' },
    { skill: 'Prawo jazdy kat. B' },
    { skill: 'Komunikatywność' },
  ];

  const interests = [
    'Produkty Apple',
    'Programowanie',
    'Gotowanie',
    'Japońska motoryzacja',
    'Rozwój osobisty i poszerzanie horyzontów',
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FacebookIcon style={{ fontSize: 60, color: 'white' }} />,
      url: 'https://www.facebook.com/profile.php?id=100003395366627',
      bgColor: '#1877F2',
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon style={{ fontSize: 60, color: 'white' }} />,
      url: 'https://www.instagram.com/mateusz_mlodecki/',
      bgColor: 'linear-gradient(45deg, #833AB4, #FD1D1D, #FCB045)',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon style={{ fontSize: 60, color: 'white' }} />,
      url: 'https://www.linkedin.com/in/mateusz-m%C5%82odecki-621104328/',
      bgColor: '#0A66C2',
    },
    {
      name: 'GitHub',
      icon: <GitHubIcon style={{ fontSize: 60, color: 'white' }} />,
      url: 'https://github.com/MateuszMlodecki',
      bgColor: '#333',
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: '#DDDDDD',
        minHeight: '100vh',
        paddingY: '3rem',
        fontFamily: '"Josephin Sans", sans-serif',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
          O mnie
        </Typography>

        <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            Jestem początkującym deweloperem pełnym pasji, skoncentrowanym na budowie bezpiecznych i
            wydajnych aplikacji. Aktualnie pracuję nad nowoczesną aplikacją bankową, wykorzystując
            React.js, TypeScript, MUI, JWT, Vitest, GitHub Pages i GitHub Actions. Stale rozwijam
            swoje umiejętności, realizując własne projekty i uczestnicząc w programie mentoringowym.
          </Typography>
        </Paper>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 4 }}>
          <Paper
            elevation={2}
            sx={{
              flex: 1,
              p: 3,
              borderRadius: 2,
              border: '1px solid rgba(0, 0, 0, 0.12)',
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Tych technologii się uczę:
            </Typography>
            <Stack spacing={1.5}>
              {skills.map(({ skill }) => (
                <Box
                  key={skill}
                  sx={{
                    p: 1.5,
                    bgcolor: 'rgba(255, 255, 255, 0.7)',
                    borderRadius: 1,
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <Typography>{skill}</Typography>
                </Box>
              ))}
            </Stack>
          </Paper>

          <Paper
            elevation={2}
            sx={{
              flex: 1,
              p: 3,
              borderRadius: 2,
              border: '1px solid rgba(0, 0, 0, 0.12)',
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Umiejętności które również posiadam:
            </Typography>
            <Stack spacing={1.5}>
              {additionalSkills.map(({ skill }) => (
                <Box
                  key={skill}
                  sx={{
                    p: 1.5,
                    bgcolor: 'rgba(255, 255, 255, 0.7)',
                    borderRadius: 1,
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <Typography>{skill}</Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Stack>

        <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            Co mnie interesuje:
          </Typography>
          <Stack spacing={1}>
            {interests.map((interest, index) => (
              <Box
                key={index}
                sx={{
                  py: 1,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: 'inline-block',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: '#555',
                    mr: 1.5,
                  }}
                />
                <Typography>{interest}</Typography>
              </Box>
            ))}
          </Stack>
        </Paper>

        <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 3, textAlign: 'center' }}>
            Moje sociale:
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 3,
                mb: { xs: 2, md: 0 },
              }}
            >
              {socialLinks.map(social => (
                <Box
                  key={social.name}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 90,
                    height: 90,
                    background: social.bgColor,
                    borderRadius: 2,
                    textDecoration: 'none',
                    transition: 'transform 0.2s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  {social.icon}
                </Box>
              ))}
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
