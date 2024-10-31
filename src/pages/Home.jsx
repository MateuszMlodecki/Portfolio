import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import profilepic from "../images/avatar.png";
import Logo from "../images/Logo.png";

export const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#DDDDDD",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        p: 5,
      }}
    >
      <Box sx={{ mb: { xs: 0, md: 6 } }}>
        <img
          src={Logo}
          alt="Logo"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: { md: "space-between" },
          alignItems: { xs: "center", md: "flex-start" },
          width: "100%",
          maxWidth: "960px",
        }}
      >
        <Box
          sx={{
            flex: "1",
            p: 4,
            textAlign: { xs: "center", md: "left" },
            mt: { xs: 10, md: 0 },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Josephine Sans",
              fontSize: "24px",
              maxWidth: "600px",
              marginX: "auto",
            }}
          >
            Cześć! Mam na imię Mateusz, jestem początkującym website developerem
            z pasją do tworzenia nowoczesnych i responsywnych stron
            internetowych. Specjalizuję się w technologiach <b>Frontend</b>,
            takich jak <b>HTML, CSS, JavaScript oraz React.js, </b>
            ale cały czas staram się poszerzać moją wiedzę. Każdy nowy projekt
            traktuję jako okazję do nauki i rozwoju, a to portfolio jest zbiorem
            moich dotychczasowych osiągnięć. Zapraszam do obejrzenia mojej
            pracy!
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 8, md: 0 },
            pb: 2,
            flex: "1",
          }}
        >
          <Avatar
            alt="Profile picture"
            src={profilepic}
            sx={{
              width: 300,
              height: 300,
              backgroundColor: "#f2f2f2",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ pb: { xs: 14, md: 0 } }} />
    </Box>
  );
};
