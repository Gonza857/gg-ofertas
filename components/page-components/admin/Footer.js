import Image from "next/image";
import Link from "next/link";
import React from "react";

const seccionesItems = [
    {
        nombre: "Juegos en oferta",
        ruta: "/reventa"
    },
    {
        nombre: "Juegos en stock",
        ruta: "/reventa/juegos/stock"
    },
    {
        nombre: "PlayStation Plus",
        ruta: "/reventa/playstationplus"
    },
    {
        nombre: "Instructivos",
        ruta: "/reventa/instructivos"
    }
]

const Footer = () => {
    return (
        <footer className="w-full bg-cyan-900 py-8 pb-4 md:py-12 md:pb-4 text-white">
            {/* WRAPPER */}
            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 pb-4 md:pb-8">
                <Contacto/>
                <Secciones/>
                <Marca/>
            </div>
            <div className={"w-10/12 mx-auto pt-4 flex flex-col"}>
                <hr/>
                <a
                    className="w-full text-center pt-4 text-sm"
                    href={"mailto:gonzaloalexramos@gmail.com"}
                    rel="noopener noreferrer"
                    target={"_blank"}
                >
                    Diseñado y desarrollado por
                    <span className={"pl-1 transition-all duration-200 hover:text-yellow-500 cursor-pointer"}>Gonzalo Ramos</span>
                </a>
            </div>
        </footer>
    );
};

const Marca = () => {
    return (
        <div className="p-4 md:p-0 flex flex-col items-center justify-center gap-4">
            <Link href={"/"} className="rounded-full overflow-hidden">
                <Image
                    src={"/images/logo-nuevo.png"}
                    width={100}
                    height={100}
                    alt="Logo Garret Games"
                />
            </Link>
            <p className="text-center pt-4">
                © Garret Games - 2025. Todos los derechos reservados
            </p>
        </div>
    )
}

const Secciones = () => {
    return (
        <div
            className="p-4 md:p-0 flex flex-col gap-2 md:gap-4 items-center">
            <p className="text-2xl font-semibold">Secciones</p>
            {seccionesItems.map(s => (
                <Link href={s.ruta} key={s.nombre}>
                    {s.nombre}
                </Link>
            ))
            }
        </div>
    )
}

const Contacto = () => {
    return (
        <div
            className="p-4 md:p-0 flex flex-col gap-2 md:gap-4 items-center">
            <p className="text-2xl font-semibold">Contacto</p>
            <a
                href="https://t.me/GARRETG_PSN"
                target="_blank"
            >
                Telegram
            </a>
            <a
                href="https://wa.me/5491132001372"
                target="_blank"
            >
                Whatsapp
            </a>
        </div>
    )
}

export default Footer;
