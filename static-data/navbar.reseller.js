import {BadgePercent, Banknote, FileText, Gamepad2, Joystick, List, MessageCircleQuestion, Tag} from "lucide-react";
import {SiPlaystation4, SiPlaystation5} from "react-icons/si";
import {FaPlaystation} from "react-icons/fa";
import {PsplusLogo} from "@/components/personalized-ui/logos";
import {TbGiftCard} from "react-icons/tb";
import React from "react";
import {RiDiscountPercentLine} from "react-icons/ri";

export const opcionesNavbarReventa = [
    {
        icon: Joystick,
        label: "Juegos",
        href: "#",
        hasSubmenu: true,
        submenu: [
            {icon: BadgePercent, label: `Juegos en oferta`, href: "/reventa"},
            // {
            //     icon: BadgePercent,
            //     label: `${"Ofertas"} de 'Fin de semana'`,
            //     href: "/reventa/juegos/ofertas/fin-de-semana"
            // },
            {
                icon: BadgePercent,
                label: `Ofertas 'Days Of Plays'`,
                href: "/reventa/juegos/ofertas/days-of-play"
            },
            {icon: FaPlaystation, label: "Juegos en stock PS4/PS5", href: "/reventa/juegos/stock"},
        ],
    },
    {
        icon: null,
        label: "PlayStationPlus",
        href: "#",
        hasSubmenu: true,
        submenu: [
            {icon: FaPlaystation, label: `Ver todos`, href: "/reventa/playstationplus"},
            {icon: BadgePercent, label: `PSN Plus en Liquidación`, href: "/reventa/playstationplus-liquidacion"},
        ],
    },
    {
        icon: null,
        label: "Tarjetas de regalo",
        href: "/reventa/tarjetas-de-regalo",
        hasSubmenu: false,
    },
]

export const opcionesMenuLateralReventa = [
    {
        name: "Juegos en oferta",
        icon: <RiDiscountPercentLine className="mr-2 h-6 w-6"/>,
        href: "/reventa"
    },
    // {
    //     name: "Ofertas de 'Fin de semana'",
    //     icon: <RiDiscountPercentLine className="mr-2 h-6 w-6"/>,
    //     href: "/reventa/juegos/ofertas/fin-de-semana"
    // },
    {
        name: "Ofertas 'Days of Play'",
        icon: <RiDiscountPercentLine className="mr-2 h-6 w-6"/>,
        href: "/reventa/juegos/ofertas/days-of-play"
    },
    {
        name: "Juegos en stock PS4/PS5",
        icon: <Gamepad2 className="mr-2 h-6 w-6"/>,
        href: "/reventa/juegos/stock"
    },
    {
        name: "PlayStation Plus",
        icon: <PsplusLogo/>,
        href: "/reventa/playstationplus"
    },
    {
        name: "Liquidación PlayStation Plus",
        icon: <RiDiscountPercentLine className="mr-2 h-6 w-6"/>,
        href: "/reventa/playstationplus-liquidacion"
    },
    {
        name: "Tarjetas de regalo Steam y PSN",
        icon: <TbGiftCard className="mr-2 h-6 w-6"/>,
        href: "/reventa/tarjetas-de-regalo"
    },
    {
        name: "Instructivos",
        icon: <FileText className="mr-2 h-6 w-6"/>,
        href: "/reventa/instructivos"
    },
]