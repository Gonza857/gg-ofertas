import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappBtn = () => {
  return (
    <a
      className="text-4xl text-center"
      href="https://wa.me/5491132001372
"
    >
      <div className="m-4 fixed bottom-0 right-0 w-16 h-16 rounded-full flex items-center justify-center bg-green-700 animacion">
        <FaWhatsapp />
      </div>
    </a>
  );
};

export default WhatsappBtn;
