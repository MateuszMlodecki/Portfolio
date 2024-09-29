import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import profilepic from "../images/avatar.png";

export const Home = () => {
  return (
    <div className="bg-[#DDDDDD] min-h-screen flex flex-col justify-start items-center p-5">
      {/* Logo */}
      <Box className="mb-8">
        <img src="./Logo.png" alt="Logo" />
      </Box>
      {/* Avatar i tekst */}
      <div className="flex flex-col-reverse items-center md:flex-row md:justify-between md:items-start w-full max-w-4xl">
        {/* Tekst */}
        <div className="md:w-1/2 p-4 text-center md:text-left flex mt-10">
          <Typography
            variant="body1"
            className="slideInFromLeft text-center md:text-left max-w-lg"
            sx={{
              fontFamily: "Josephine Sans",
              fontSize: 24,
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
        </div>
        {/* Avvatar */}
        <div className="slideInFromRight mt-8 md:mt-0 md:w-1/2 flex justify-center pb-2">
          <Avatar
            alt="Profile picture"
            src={profilepic}
            sx={{ width: 300, height: 300, backgroundColor: "#f2f2f2f2" }}
          />
        </div>
      </div>
      <div className="pb-14"></div>
    </div>
  );
};
