import { Box } from '@mui/material';
import backgroundImg from '../../background_portfolio.png';
import { HeroSection } from './HeroSection';
import { NavigationSection } from './NavigationSection';
import { Projects } from './Projects';
import { AboutMe } from './AboutMe';
import { SectionWrapper } from './SectionWrapper';
import { Contact } from './Contact';
import { MoveToProjectsButton } from './MoveToProjectsButton';
const scrollToSection = id => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const HomePage = () => {
  const backgroundStyleUrl = `url(${backgroundImg})`;

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: backgroundStyleUrl,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 4,
          maxWidth: '1400px',
          mx: 'auto',
          p: { xs: 1, sm: 2 },
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            mx: 'auto',
            gap: 4,
            width: '100%',
          }}
        >
          <SectionWrapper
            id="home"
            title="Mateusz Młodecki"
            scrollToId="projects"
            scrollToText="Zobacz moje projekty"
            scrollToSection={scrollToSection}
          >
            <HeroSection pageBackground={backgroundStyleUrl} />
          </SectionWrapper>
          <SectionWrapper
            id="projects"
            title="Moje Projekty"
            scrollToId="about"
            scrollToText="Dowiedz się więcej o mnie"
            scrollToSection={scrollToSection}
          >
            <Projects pageBackground={backgroundStyleUrl} />
            <MoveToProjectsButton />
          </SectionWrapper>
          <SectionWrapper
            id="about"
            title="O mnie"
            scrollToId="contact"
            scrollToText="Skontaktuj się ze mną"
            scrollToSection={scrollToSection}
          >
            <AboutMe pageBackground={backgroundStyleUrl} />
          </SectionWrapper>{' '}
          <SectionWrapper
            id="contact"
            title="Kontakt"
            scrollToId="home"
            scrollToText="Wróć na początek"
            scrollToSection={scrollToSection}
          >
            <Contact pageBackground={backgroundStyleUrl} />
          </SectionWrapper>
        </Box>

        <NavigationSection pageBackground={backgroundStyleUrl} />
      </Box>
    </>
  );
};

export default HomePage;
