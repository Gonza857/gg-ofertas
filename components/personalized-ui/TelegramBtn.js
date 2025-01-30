import Image from "next/image";
import React from "react";
import { FaTelegramPlane  } from "react-icons/fa";

const TelegramBtn = () => {
    return (
        <a
            className="text-4xl text-center"
            href="https://t.me/GARRETG_PSN"
            target="_blank"
        >
            <div className="m-4 fixed bottom-20 right-0 w-16 h-16 rounded-full flex items-center text-white justify-center bg-blue-500 animacionTelegram">
                <FaTelegramPlane/>
            </div>
        </a>
    );
};

export default TelegramBtn;
