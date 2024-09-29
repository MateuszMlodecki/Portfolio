import React, { useState } from "react";
import { FaEnvelope, FaMobile, FaWhatsapp } from "react-icons/fa";
import WhatsAppQrCode from "../images/QrcodeWhatsapp.png";

const SocialIcon = ({ icon, text, onClick }) => (
  <div
    onClick={onClick}
    className="flex justify-center items-start cursor-pointer"
  >
    {icon}
    {text}
  </div>
);

export const Contact = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon === selectedIcon ? null : icon);
  };

  return (
    <div className="bg-[#DDDDDD] min-h-screen p-8">
      <div className="text-2xl pb-8">Skontaktuj się ze mna przez:</div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <SocialIcon
          icon={<FaEnvelope size="28" />}
          text={"E-mail"}
          onClick={() => handleIconClick("email")}
        />
        {selectedIcon === "email" && (
          <div className="md:col-start-1 md:row-start-2 flex justify-center items-center h-10 md:h-36 slideInFromLeft">
            <p>mateuszmlodecki@icloud.com</p>
          </div>
        )}
        <SocialIcon
          icon={<FaMobile size="28" />}
          text={"Telefon"}
          onClick={() => handleIconClick("Telefon")}
        />
        {selectedIcon === "Telefon" && (
          <div className="md:col-start-2 md:row-start-2 flex justify-center items-center h-10 md:h-36">
            <a href="tel:790277760">
              <p>+48 790 277 760</p>
            </a>
          </div>
        )}
        <SocialIcon
          icon={<FaWhatsapp size="28" />}
          text={"Whatsapp"}
          onClick={() => handleIconClick("Whatsapp")}
        />
        {selectedIcon === "Whatsapp" && (
          <div className="md:col-start-3 md:row-start-2 flex justify-center items-center md:h-36 slideInFromRight">
            <a
              href="https://wa.me/qr/YUFDAGMVQ6GMD1"
              target="_blank"
              rel="noreferrer"
            >
              <img src={WhatsAppQrCode} alt="QRCode" />
            </a>
          </div>
        )}
      </div>

      <div className="pt-8 text-2xl">
        Zachęcam również do kontaktu za pomocą formularza
      </div>
      <div>form placeholder</div>
    </div>
  );
};
