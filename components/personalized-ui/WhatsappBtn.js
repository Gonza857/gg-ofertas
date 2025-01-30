import Image from "next/image";
import React from "react";
import {FaWhatsapp} from "react-icons/fa";

const WhatsappBtn = () => {
    return (
        <a
            className="text-4xl text-center"
            href="https://wa.me/5491132001372"
            target="_blank"
        >
            <div
                className="m-4 fixed bottom-0 left-0 w-12 h-12 rounded-full flex items-center text-white justify-center bg-green-700 animacion">
                <FaWhatsapp className={"text-3xl"}/>
            </div>
        </a>
    );
};

export default WhatsappBtn;
