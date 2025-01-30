import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-cyan-900 py-8 md:py-12 text-white">
            {/* WRAPPER */}
            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 pb-4 md:pb-8">

                <div
                    className="p-4 md:p-0 flex flex-col gap-2 md:gap-4 items-center justify-center">
                    <p className="text-2xl font-semibold">Contacto</p>
                    <a
                        href="https://www.instagram.com/garret.games2_?igsh=N2NzYjlxaTNyNjN2"
                        target="_blank"
                        className="text-1xl">
                        Instagram
                    </a>
                    <a
                        href="https://wa.me/5491132001372"
                        target="_blank"
                        className="text-1xl">
                        Whatsapp
                    </a>
                </div>

                <div className="p-4 md:p-0 flex flex-col items-center justify-center gap-4">
                    <Link href={"/"} className="rounded-full overflow-hidden">
                        <Image
                            src={"/images/logo-nuevo.png"}
                            width={100}
                            height={100}
                            alt="Logo Garret Games"
                        />
                    </Link>
                </div>
            </div>
            <div className={"w-10/12 mx-auto"}>
                <hr/>
                <p className="text-center pt-4">
                    © Garret Games - 2025. Todos los derechos reservados
                </p>
            </div>
        </footer>
    );
};

export default Footer;
