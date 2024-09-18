import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import photo2 from "../images/photo2.png"

export const Home = () => {
  return (
    <div className="bg-[#DDDDDD] overflow- min-h-screen flex flex-col justify-start items-center p-5">
      {/* Logo */}
      <Box className="mb-8">
        <Typography variant="h4" /* className="text-white"*/>Logo</Typography>
      </Box>
      {/* Avatar i tekst */}
      <div className="flex flex-col-reverse items-center md:flex-row md:justify-between md:items-start w-full max-w-4xl">
        {/* Tekst */}
        <div className="md:w-1/2 p-4 text-center md:text-left flex mt-10">
          <Typography
            variant="body1"
            className="slideInFromLeft text-center md:text-left max-w-lg"
          >
            Hello, I'm Mateusz, a warehouse worker with five years of
            experience, aspiring to become a programmer. My passion for
            problem-solving and coding sparked through self-taught online
            courses. Now, after work, I'm dedicated to mastering HTML5, CSS, and
            JavaScript, driven by the belief that determination and discipline
            will lead me to a successful career in IT.
          </Typography>
        </div>
        {/* Avatar */}
        <div className="slideInFromRight mt-8 md:mt-0 md:w-1/2 flex justify-center pb-2">
          <Avatar
            alt="Profile picture"
            src={photo2}
            sx={{ width: 300, height: 300, backgroundColor: "#f2f2f2f2" }}
          />
        </div>
      </div>
      {/* Sociale do poprawienia */}
      <div className="bg-purple-800  flex w-screen">
      <div className="md:grid md:grid-cols-12 gap-2 sm:flex sm:flex-row">
        <div className="col-start-9"><SocialIcon icon={<FaGithubSquare size="64" />} /></div>
        <SocialIcon className="col-start-10" icon={<FaFacebookSquare size="64" />} />
        <SocialIcon className="col-start-11" icon={<FaInstagramSquare size="64" />} />
      </div>
    </div>
    </div>
  );
};

const SocialIcon = ({ icon, text, path }) => (
  <Link to={path}>
    <div>
      {icon}
      <span>{text}</span>
    </div>
  </Link>
);
