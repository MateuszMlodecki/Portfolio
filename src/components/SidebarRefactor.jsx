import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFilePdf,
  FaFolderOpen,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { Box, IconButton } from "@mui/material";
import CustomTooltip from "./CustomTooltip";

const sidebarItems = [
  { icon: <FaHome size="28" />, text: "Home", path: "/Portfolio" },
  { icon: <FaUser size="28" />, text: "O mnie", path: "/About" },
  { icon: <FaEnvelope size="28" />, text: "Kontakt", path: "/Contact" },
  { icon: <FaFilePdf size="28" />, text: "Moje curriculum vitae", path: "/Cv" },
  { icon: <FaFolderOpen size="28" />, text: "Projekty", path: "/Projects" },
];

export const Sidebar = () => (
  <Box
    sx={{
      position: { xs: "fixed", md: "fixed" },
      bottom: 0,
      width: { xs: "100%", md: "80px" },
      height: { xs: "80px", md: "100vh" },
      display: "flex",
      flexDirection: { xs: "row", md: "column" },
      justifyContent: { xs: "space-around", md: "flex-start" },
      alignItems: "center",
      bgcolor: "#1E2D24",
      color: "white",
      boxShadow: 3,
      p: 1,
      zIndex: 1000,
    }}
  >
    {sidebarItems.map((item, index) => (
      <SideBarIcon
        key={index}
        icon={item.icon}
        text={item.text}
        path={item.path}
      />
    ))}
  </Box>
);

const SideBarIcon = ({ icon, text, path }) => (
  <Link to={path} style={{ textDecoration: "none", color: "inherit" }}>
    <CustomTooltip title={text} placement="right">
      <IconButton
        sx={{
          m: 1,
          color: "inherit",
          transition: "scale 750ms",
          "&:hover": {
            bgcolor: "#3c4a40",
            scale: "1.25",
          },
        }}
      >
        {icon}
      </IconButton>
    </CustomTooltip>
  </Link>
);
