import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  // Stan przechowujący widoczność tekstu
  const [isVisible, setIsVisible] = useState(false);

  // Funkcja zmieniająca widoczność
  const toggleText = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div className="bg-[#DDDDDD] min-h-screen">
      <div>
        {/* Nagłówek */}
        <h1>Skontaktuj się ze mną</h1>
      </div>
      <div className="grid grid-cols-2">
        <div>
          {/* Sekcja z listą kontaktową */}
          <ContactIcon
            icon={<FaWhatsapp size={76} />}
            text={isVisible ? "WhatsApp:  790 277 760" : ""}
            onClick={toggleText} // Przekazujemy funkcję do komponentu ContactIcon
          />
        </div>
      </div>
    </div>
  );
};

const ContactIcon = ({ icon, text, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      {" "}
      {/* Obsługa kliknięcia */}
      {icon}
      <span className="col-span-2">{text}</span>
    </div>
  );
};
