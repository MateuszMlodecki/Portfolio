import React from "react";

import {
  FaEnvelope,
  FaFilePdf,
  FaFolderOpen,
  FaHome,
  FaUser,
} from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-20 m-0
    flex flex-col
    bg-purple-500 text-white shadow-lg"
    >
      <SideBarIcon icon={<FaHome size="28" />} />
      <SideBarIcon icon={<FaUser size="28" />} />
      <SideBarIcon icon={<FaEnvelope size="28" />} />
      <SideBarIcon icon={<FaFilePdf size="28" />} />
      <SideBarIcon icon={<FaFolderOpen size="28" />} />
      <div></div>
    </div>
  );
};

const SideBarIcon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;
