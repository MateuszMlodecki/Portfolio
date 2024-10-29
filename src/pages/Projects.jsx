import React from "react";

export const Projects = () => {
  return (
    <div className="relative group w-64 h-64">
      {/* Obrazek */}
      <img
        src="https://via.placeholder.com/300"
        alt="Opis obrazka"
        className="w-full h-full object-cover"
      />
      {/* Opis tu*/}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transform -translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-lg font-semibold">Opis obrazka</p>
      </div>
    </div>
  );
};
