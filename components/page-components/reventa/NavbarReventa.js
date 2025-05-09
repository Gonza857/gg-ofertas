"use client"

import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {ChevronDown, FileText, Gamepad2, Menu, PlusCircle, X} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {opcionesNavbarReventa, opcionesMenuLateralReventa} from "@/static-data/navbar.reseller";

const Navbar = () => {
    const [estaAbierto, setEstaAbierto] = useState(false);

    const manejarNav = () => setEstaAbierto(!estaAbierto);

    return (
        <header className="flex items-center w-full h-20 bg-cyan-900 px-2 lg:px-8 fixed z-50">
            {/* WRAPPER */}
            <div className={"flex items-center justify-between w-full md:w-11/12 lg:w-5/6 mx-auto"}>
                <aside
                    className={`mt-20 fixed inset-0 z-30 flex items-start transition-opacity duration-300
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
                        {opcionesMenuLateralReventa.map(item => (
                            <Link
                                onClick={() => manejarNav()}
                                key={item.name}
                                href={item.href}
                                className="flex items-center p-2 mb-2 text-cyan-900 transition-all duration-200 hover:bg-gray-200 rounded"
                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        ))}
                        <p className={"absolute bottom-0 -left-2 w-full text-center italic font-thin"}>- Garret Games
                            -</p>
                    </div>
                </aside>
                <div className="md:w-full flex justify-between items-center">
                    <Link href={"/reventa"} className="rounded-full overflow-hidden">
                        <Image
                            src={"/images/logo-nuevo.png"}
                            width={60}
                            height={60}
                            alt="Logo Garret Games"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center gap-5 md:gap-2">
                        {opcionesNavbarReventa.map((item) =>
                            item.hasSubmenu ? (
                                <DropdownMenu key={item.label}>
                                    <DropdownMenuTrigger asChild>
                                        <button
                                            className="text-white hover:text-orange-500 outline-0 py-2 rounded-md font-medium flex items-center gap-1.5"
                                        >
                                            {item.icon && <item.icon className="h-4 w-4"/>}
                                            {item.label}
                                            <ChevronDown className="h-4 w-4 ml-0.5"/>
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="center" className="w-56">
                                        {item.submenu.map((subItem) => (
                                            <DropdownMenuItem key={subItem.label} asChild>
                                                <a href={subItem.href}
                                                   className="flex items-center gap-2 cursor-pointer">
                                                    <subItem.icon className="w-6 h-6"/>
                                                    <span>{subItem.label}</span>
                                                </a>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-white hover:text-orange-500 px-3 py-2 rounded-md font-medium flex items-center gap-1.5"
                                >
                                    {item.icon && <item.icon className="h-4 w-4"/>}
                                    {item.label}
                                </Link>
                            ),
                        )}
                    </div>
                </div>
                <BotonMenu estaAbierto={estaAbierto} manejarNav={manejarNav}/>
            </div>
        </header>
    );
};

const BotonMenu = ({manejarNav, estaAbierto}) => {
    return (
        <div className={"md:hidden"}>
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
    )
}


export default Navbar;
