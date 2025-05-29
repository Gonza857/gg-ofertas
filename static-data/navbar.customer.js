import {
    BadgePercent,
    Banknote,
    CircleHelp,
    FileText,
    Gamepad2,
    Joystick,
    MessageCircleQuestion,
    Store
} from "lucide-react";
import {SiPlaystation4, SiPlaystation5, SiSteam} from "react-icons/si";
import {RiDiscountPercentLine} from "react-icons/ri";
import {PsplusLogo} from "@/components/personalized-ui/logos";
import {BsPlaystation} from "react-icons/bs";
import React from "react";
import {TbGiftCard} from "react-icons/tb";

export const navbarOptions = [
    {
        icon: Joystick,
        label: "Juegos",
        href: "#",
        hasSubmenu: true,
        submenu: [
            {icon: BadgePercent, label: `Juegos en oferta`, href: "/juegos/ofertas"},
            // {icon: BadgePercent, label: `${"Ofertas"} de 'Fin de semana'`, href: "/juegos/ofertas/fin-de-semana"},
            {icon: BadgePercent, label: `Ofertas 'Days of Play'`, href: "/juegos/ofertas/days-of-play"},
            {icon: SiPlaystation5, label: "Juegos PS5", href: "/juegos/stock/ps5"},
            {icon: SiPlaystation4, label: "Juegos PS4", href: "/juegos/stock/ps4"},
        ],
    },
    {
        icon: null,
        label: "PlayStation Plus",
        href: "/playstationplus",
        hasSubmenu: false,
    },
    {
        icon: null,
        label: "Tarjetas de regalo",
        href: "/tarjetas-de-regalo",
        hasSubmenu: false,
    },
    {
        icon: Store,
        label: "Sobre nosotros",
        href: "#",
        hasSubmenu: true,
        submenu: [
            {icon: CircleHelp, label: "Preguntas frecuentes", href: "/preguntas-frecuentes"},
            {icon: Banknote, label: "Métodos de pago", href: "/formas-de-pago"},
            {icon: FileText, label: "Instructivos", href: "/instructivos"},
        ],
    },
]

export const sideNavbarOptions = [
    {
        name: "Ofertas",
        icon: <BadgePercent className="mr-2 h-6 w-6"/>,
        href: "/juegos/ofertas"
    },
    // {
    //     name: "Ofertas de 'Fin de Semana'",
    //     icon: <BadgePercent className="mr-2 h-6 w-6"/>,
    //     href: "/juegos/ofertas/fin-de-semana"
    // },
    {
        name: "Ofertas 'Days of Play'",
        icon: <BadgePercent className="mr-2 h-6 w-6"/>,
        href: "/juegos/ofertas/days-of-play",
        tieneDestacado: true,
        textoDestacado: "Nuevo",
        tieneOferta: false,
        texto: ""
    },
    {
        name: "Juegos PS4",
        icon: <SiPlaystation4 className="mr-2 h-6 w-6"/>,
        href: "/juegos/stock/ps4"
    },
    {
        name: "Juegos PS5",
        icon: <SiPlaystation5 className="mr-2 h-6 w-6"/>,
        href: "/juegos/stock/ps5"
    },
    {
        name: "PlayStation Plus",
        icon: <PsplusLogo/>,
        href: "/playstationplus",
        tieneOferta: true,
        texto: "En oferta"
    },
    {
        name: "Preguntas frecuentes",
        icon: <MessageCircleQuestion className="mr-2 h-6 w-6"/>,
        href: "/preguntas-frecuentes"
    },
    {
        name: "Instructivos",
        icon: <FileText className="mr-2 h-6 w-6"/>,
        href: "/instructivos"
    },
    {
        name: "Tarjetas de regalo",
        icon: <TbGiftCard  className="mr-2 h-6 w-6"/>,
        href: "/tarjetas-de-regalo"
    },
    {
        name: "Formas de pago",
        icon: <Banknote className="mr-2 h-6 w-6"/>,
        href: "/formas-de-pago"
    },
]
