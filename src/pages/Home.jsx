import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

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
            Cześć, jestem Mateusz, pracownik magazynu z pięcioletnim
            doświadczeniem, aspirujący do zostania programistą. Moja pasja do
            rozwiązywania problemów i programowania narodziła się dzięki
            samodzielnie przerabianym kursom online. Obecnie, po pracy,
            poświęcam się nauce HTML5, CSS i JavaScript, wierząc, że
            determinacja i dyscyplina doprowadzą mnie do udanej kariery w IT.
          </Typography>
        </div>
        {/* Avatar */}
        <div className="slideInFromRight mt-8 md:mt-0 md:w-1/2 flex justify-center pb-2">
          <Avatar
            alt="Profile picture"
            src="./Photo2.png"
            sx={{ width: 300, height: 300, backgroundColor: "#f2f2f2f2" }}
          />
        </div>
      </div>
      {/* Fotosection */}
      <div className="p-10">
        <img src="./homepage.jpg" alt="" style={{ width: 993 }} />
      </div>
    </div>
  );
};
