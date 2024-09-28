import React from "react";
import { FaEnvelope, FaInstagram, FaMobile, FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="bg-[#DDDDDD] min-h-screen p-8">
      <div className="text-2xl pb-8">Skontaktuj się ze mna przez:</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 h-32">
        <SocialIcon icon={<FaEnvelope size="28" />} text={"E-mail"} />
        <SocialIcon icon={<FaMobile size="28" />} text={"Telefon"} />
        <SocialIcon icon={<FaWhatsapp size="28" />} text={"Whatsapp"} />
        <SocialIcon icon={<FaInstagram size="28" />} text={"Instagram"} />
      </div>
      <div className="text-2xl">
        Zachęcam również do kontaktu za pomocą formularza
      </div>
      <div>form placeholder</div>
    </div>
  );
};

const SocialIcon = ({ icon, text }) => (
  <div className="flex justify-center items-start w-64">
    {icon}
    {text}
  </div>
);
