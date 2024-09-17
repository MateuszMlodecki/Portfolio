import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFilePdf,
  FaFolderOpen,
  FaHome,
  FaUser,
} from "react-icons/fa";

const iconPopUpHome = "Home";
const iconPopUpAbout = "About me";
const iconPopUpContact = "Contact";
const iconPopUpMyCV = "My curriculum vitae";
const iconPopUpProjects = "Projects";

export const Sidebar = () => {
  return (
    <div
      className="fixed
      bottom-0 w-full h-20 flex flex-row justify-around
      bg-purple-500 text-white shadow-lg
      md:top-0 md:left-0 md:h-screen md:w-20 md:flex-col md:justify-start p-2 md:rounded-none sm:mx-auto z-[1000]"
    >
      <SideBarIcon icon={<FaHome size="28" />} text={iconPopUpHome} path="/" />
      <SideBarIcon
        icon={<FaUser size="28" />}
        text={iconPopUpAbout}
        path="/About"
      />
      <SideBarIcon
        icon={<FaEnvelope size="28" />}
        text={iconPopUpContact}
        path="/Contact"
      />
      <SideBarIcon
        icon={<FaFilePdf size="28" />}
        text={iconPopUpMyCV}
        path="/Cv"
      />
      <SideBarIcon
        icon={<FaFolderOpen size="28" />}
        text={iconPopUpProjects}
        path="/Projects"
      />
    </div>
  );
};

const SideBarIcon = ({ icon, text, path }) => (
  <Link to={path}>
    <div className="sidebar-icon group relative">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100 sm:hidden md:block">
        {text}
      </span>
    </div>
  </Link>
);
