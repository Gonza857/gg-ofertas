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
            <div className="m-4 fixed z-50 bottom-16 left-0 w-12 h-12 rounded-full flex items-center text-white justify-center bg-blue-500 animacionTelegram">
                <FaTelegramPlane className={"text-3xl"}/>
            </div>
        </a>
    );
};

export default TelegramBtn;
