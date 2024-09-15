import React from "react";
import {
  FaEnvelope,
  FaFilePdf,
  FaFolderOpen,
  FaHome,
  FaUser,
} from "react-icons/fa";

export const Sidebar = () => {
  const handleTextHover = (text) => {
  };

  return (
    <div
      className="fixed top-0 left-0 h-screen w-20 m-0
    flex flex-col
    bg-purple-500 text-white shadow-lg"
    >
      <SideBarIcon
        icon={<FaHome size="28" />}
        text="Home"
        onHover={() => handleTextHover("Home")}
      />
      <SideBarIcon icon={<FaUser size="28" />} text="About Me" onHover={() => handleTextHover("About Me")} />
      <SideBarIcon icon={<FaEnvelope size="28" />} text="Contact" onHover={() => handleTextHover("Contact")} />
      <SideBarIcon icon={<FaFilePdf size="28" />} text="My CV" onHover={() => handleTextHover("My CV")} />
      <SideBarIcon icon={<FaFolderOpen size="28" />} text="My projects" onHover={() => handleTextHover("My projects")} />
    </div>
  );
};

const SideBarIcon = ({ icon, text, onHover }) => (
  <div className="sidebar-icon group" onMouseEnter={onHover} onMouseLeave={onHover}>
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);