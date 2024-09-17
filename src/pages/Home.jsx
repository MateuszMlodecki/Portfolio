import React from "react";
import { Avatar, Box, Grid2, Typography } from "@mui/material";

export const Home = () => {
  return (
    <div className="bg-purple-600 min-h-screen flex flex-col justify-start items-center p-5">
      {/* Logo */}
      <Box className="mb-8">
        <Typography variant="h4" className="text-white">
          Logo
        </Typography>
      </Box>
      {/* Avatar i tekst */}
      <div className="flex flex-col-reverse items-center md:flex-row md:justify-between md:items-start w-full max-w-4xl">
        {/* Tekst */}
        <div className="md:w-1/2 p-4 text-center md:text-left">
          <Typography
            variant="body1"
            className="text-white text-center md:text-left max-w-lg"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            voluptas officiis pariatur sed quasi animi. Repudiandae, minima
            quasi? Explicabo consectetur nihil aut sit vero dolore ipsum
            accusantium vel non est.
          </Typography>
        </div>
        {/* Avatar */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <Avatar
            alt="Profile picture"
            src="./Photo2.png"
            sx={{ width: 300, height: 300, backgroundColor: "#a855f6" }}
          />
        </div>
      </div>
    </div>
  );
};
