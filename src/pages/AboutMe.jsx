import React from "react";
import { Box, Grid, Typography, LinearProgress } from "@mui/material";
import { useProgressAnimation } from "../hooks/ProgressAnimation";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProgressBar({ targetValue, speed }) {
  const progress = useProgressAnimation(targetValue, speed);

  return (
    <Box sx={{ width: "100%", mt: 1 }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}

export const AboutMe = () => {
  const skills = [
    { skill: "HTML5", target: 99, speed: 10 },
    { skill: "CSS3", target: 80, speed: 6 },
    { skill: "JavaScript", target: 50, speed: 4 },
    { skill: "React.JS", target: 50, speed: 5 },
    { skill: "Tailwind CSS", target: 65, speed: 3 },
    { skill: "Git i Github", target: 45, speed: 10 },
    { skill: "Responsywny Web Design", target: 80, speed: 9 },
    { skill: "Zarządzanie stanem (Redux, Context API)", target: 10, speed: 9 },
    { skill: "API (REST, GraphQL)", target: 25, speed: 9 },
  ];

  const additionalSkills = [
    { skill: "Język angielski B1", target: 50, speed: 9 },
    { skill: "Prawo jazdy kat. B", target: 100, speed: 3 },
    { skill: "Komunikatywność", target: 100, speed: 6 },
  ];

  const interests = [
    "Produkty Apple",
    "Programowanie",
    "Gotowanie",
    "Japońska motoryzacja",
    "Rozwój osobisty i poszerzanie horyzontów",
  ];

  return (
    <Box
      sx={{
        bgcolor: "#DDDDDD",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "Josephine sans",
      }}
    >
      {/* Main story */}
      <Typography
        sx={{ fontSize: "24px", fontWeight: "bold", paddingY: "1rem" }}
      >
        O mnie
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Cześć, jestem Mateusz, pracownik magazynu z pięcioletnim doświadczeniem,
        aspirujący do zostania programistą. Moja pasja do rozwiązywania
        problemów i programowania narodziła się dzięki samodzielnie przerabianym
        kursom online. Obecnie, po pracy, poświęcam się nauce HTML5, CSS i
        JavaScript, wierząc, że determinacja i dyscyplina doprowadzą mnie do
        udanej kariery w IT.
      </Typography>

      {/* Skills */}
      <Grid container spacing={2} sx={{ paddingY: "1.25rem" }}>
        {/* Learning Technologies */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ padding: 2, border: "1px solid black", borderRadius: 1 }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            Tych technologii się uczę:
          </Typography>
          {skills.map(({ skill, target, speed }) => (
            <Box key={skill} sx={{ marginBottom: 2 }}>
              <Typography>{skill}</Typography>
              <ProgressBar targetValue={target} speed={speed} />
            </Box>
          ))}
        </Grid>

        {/* Additional Skills */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ padding: 2, border: "1px solid black", borderRadius: 1 }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            Umiejętności które również posiadam:
          </Typography>
          {additionalSkills.map(({ skill, target, speed }) => (
            <Box key={skill} sx={{ marginBottom: 2 }}>
              <Typography>{skill}</Typography>
              <ProgressBar targetValue={target} speed={speed} />
            </Box>
          ))}
        </Grid>
      </Grid>

      {/* Interests */}
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Co mnie interesuje:
        </Typography>
        <Box sx={{ marginLeft: 2, marginTop: 1 }}>
          {interests.map((interest, index) => (
            <Typography key={index}>- {interest}</Typography>
          ))}
        </Box>
      </Box>

      {/* Social Links */}
      <Typography variant="h6" sx={{ padding: 2, fontWeight: "bold" }}>
        Moje sociale:
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "96px",
            height: "96px",
            background: "#1877F2", // kolor tła dla Facebooka
            borderRadius: "15%",
          }}
        >
          <FacebookIcon
            sx={{
              fontSize: "80px",
              color: "white",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "96px",
            height: "96px",
            background: "linear-gradient(45deg, #833AB4, #FD1D1D, #FCB045)", // gradient dla Instagrama
            borderRadius: "15%",
            marginLeft: 1,
          }}
        >
          <InstagramIcon
            sx={{
              fontSize: "80px",
              color: "white",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "96px",
            height: "96px",
            background: "#0A66C2", // kolor tła dla LinkedIn
            borderRadius: "15%",
            marginLeft: 1,
          }}
        >
          <LinkedInIcon
            sx={{
              fontSize: "80px",
              color: "white",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "96px",
            height: "96px",
            background: "#333", // kolor tła dla GitHub (ciemny szary lub czarny)
            borderRadius: "15%",
            marginLeft: 1,
          }}
        >
          <GitHubIcon
            sx={{
              fontSize: "80px",
              color: "white",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ marginBottom: "140px" }}></Box>
    </Box>
  );
};
