"use client"

import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {FileText, Gamepad2, Menu, PlusCircle, X} from "lucide-react";

const Navbar = () => {
    const [estaAbierto, setEstaAbierto] = useState(false);

    const manejarNav = () => setEstaAbierto(!estaAbierto);

    return (
        <header className="flex items-center w-full h-20 bg-cyan-900 px-2 relative">
            <div className={""}>
                <Button
                    variant="outline"
                    onClick={() => manejarNav()}
                    className="bg-transparent text-white hover:bg-transparent hover:text-white relative flex items-center justify-center w-10 h-10"
                >
                    <X
                        className={`absolute transition-all duration-300 ${
                            estaAbierto ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-90"
                        }`}
                    />

                    <Menu
                        className={`absolute transition-all duration-300 ${
                            estaAbierto ? "opacity-0 scale-0 rotate-90" : "opacity-100 scale-100 rotate-0"
                        }`}
                    />
                </Button>
            </div>
            <div className="w-full px-4 md:px-0 md:w-10/12 mx-auto flex justify-between items-center">
                <Link href={"/reventa/ofertas-juegos"} className="rounded-full overflow-hidden">
                    <Image
                        src={"/images/logo-nuevo.png"}
                        width={60}
                        height={60}
                        alt="Logo Garret Games"
                    />
                </Link>
                {/*<nav className={""}>*/}
                {/*    <ul className="flex gap-5 flex-wrap text-white">*/}
                {/*        <Link href={"/reventa/ofertas-juegos"}>*/}
                {/*            <li>Ofertas</li>*/}
                {/*        </Link>*/}
                {/*        /!*<Link href={"/(pages)/formasdepago"}>*!/*/}
                {/*        /!*  <li>Formas de pago</li>*!/*/}
                {/*        /!*</Link>*!/*/}
                {/*        <Link href={"/reventa/playstationplus"}>*/}
                {/*            <li>PS Plus</li>*/}
                {/*        </Link>*/}
                {/*        <Link href={"/reventa/playstationplus-liquidacion"}>*/}
                {/*            <li>Liquidación PS Plus</li>*/}
                {/*        </Link>*/}
                {/*    </ul>*/}
                {/*</nav>*/}
            </div>
            <aside
                className={`mt-20 fixed inset-0 z-10 flex items-start transition-opacity duration-300
                ${estaAbierto ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                lg:hidden lg:opacity-100 lg:pointer-events-auto lg:relative`}
            >
                {/* Fondo oscuro semitransparente */}
                <div
                    className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
                    onClick={() => manejarNav()} // Puedes usar una función de cierre aquí
                ></div>

                {/* Contenedor del menú */}
                <div
                    className={`relative p-4 w-10/12 max-w-sm bg-white h-full shadow-2xl transform transition-transform duration-300 ease-in-out
                    ${estaAbierto ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    {opcionesMenu.map(item => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center p-2 mb-2 text-cyan-900 transition-all duration-200 hover:bg-gray-200 rounded"
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                    <p className={"absolute bottom-0 -left-2 w-full text-center italic font-thin"}>- Garret Games -</p>
                </div>
            </aside>
        </header>
    );
};

const opcionesMenu = [
    {
        name: "Juegos en oferta",
        icon: <Gamepad2 className="mr-2 h-6 w-6"/>,
        href: "/juegos"
    },
    {
        name: "Juegos en stock",
        icon: <Gamepad2 className="mr-2 h-6 w-6"/>,
        href: "/juegos"
    },
    {
        name: "PlayStation Plus",
        icon: <PlusCircle className="mr-2 h-6 w-6"/>,
        href: "/playstation-plus"
    },
    {
        name: "Liquidación PlayStation Plus",
        icon: <PlusCircle className="mr-2 h-6 w-6"/>,
        href: "/playstation-plus"
    },
    {
        name: "Instructivos",
        icon: <FileText className="mr-2 h-6 w-6"/>,
        href: "/instructivo"
    },
]

export default Navbar;
