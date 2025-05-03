import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    BarChart,
    Settings,
    Gamepad2,
    Tv,
    Headphones,
    Tag,
    Clock,
    CreditCard,
    TrendingUp,
    Mail,
    User, Joystick, Plus, Star,
} from "lucide-react"
import {TbGiftCard} from "react-icons/tb";
import {BiSolidDiscount} from "react-icons/bi";
import {GrNew} from "react-icons/gr";

export const adminMenuItems = [
    {
        title: "Dashboard",
        icon: <LayoutDashboard className="h-5 w-5" />,
        path: "/admin",
        submenu: false,
    },
    {
        title: "Juegos",
        icon: <Joystick className="h-5 w-5" />,
        submenu: true,
        key: "juegos",
        items: [
            { title: "Stock", icon: <Gamepad2 className="h-4 w-4" />, path: "/admin/stock/juegos" },
            { title: "Oferta", icon: <BiSolidDiscount className="h-4 w-4" />, path: "/admin/juegos/ofertas" },
            { title: "Preventas", icon: <Star className="h-4 w-4" />, path: "/admin/juegos/preventas" },
        ],
    },
    {
        title: "PlayStation Plus",
        icon: <Plus className="h-5 w-5" />,
        submenu: true,
        key: "playstationplus",
        items: [
            { title: "Nuevos", icon: <GrNew className="h-4 w-4" />, path: "/admin/playstationplus" },
            { title: "Liquidacion", icon: <BiSolidDiscount className="h-4 w-4" />, path: "/admin/playstationplus/liquidacion" },
        ],
    },
    {
        title: "Tarjetas de regalo",
        icon: <TbGiftCard className="h-5 w-5" />,
        submenu: false,
        path: "/admin/giftcards",
        // key: "giftcards",
        // items: [
        //     { title: "Todas", icon: <Headphones className="h-4 w-4" />, path: "/admin/giftcards" },
        // ],
    },
    // {
    //     title: "Ventas",
    //     icon: <ShoppingCart className="h-5 w-5" />,
    //     submenu: true,
    //     key: "ventas",
    //     items: [
    //         { title: "Pedidos", icon: <ShoppingCart className="h-4 w-4" />, path: "/admin/ventas/pedidos" },
    //         { title: "Pendientes", icon: <Clock className="h-4 w-4" />, path: "/admin/ventas/pendientes" },
    //         { title: "Pagos", icon: <CreditCard className="h-4 w-4" />, path: "/admin/ventas/pagos" },
    //     ],
    // },
    // {
    //     title: "Clientes",
    //     icon: <Users className="h-5 w-5" />,
    //     submenu: true,
    //     key: "clientes",
    //     items: [
    //         { title: "Lista de clientes", icon: <Users className="h-4 w-4" />, path: "/admin/clientes/lista" },
    //         { title: "Segmentos", icon: <Users className="h-4 w-4" />, path: "/admin/clientes/segmentos" },
    //     ],
    // },
    // {
    //     title: "Marketing",
    //     icon: <BarChart className="h-5 w-5" />,
    //     submenu: true,
    //     key: "marketing",
    //     items: [
    //         { title: "Promociones", icon: <TrendingUp className="h-4 w-4" />, path: "/admin/marketing/promociones" },
    //         { title: "Newsletters", icon: <Mail className="h-4 w-4" />, path: "/admin/marketing/newsletters" },
    //         { title: "Estadísticas", icon: <BarChart className="h-4 w-4" />, path: "/admin/marketing/estadisticas" },
    //     ],
    // },
    // {
    //     title: "Configuración",
    //     icon: <Settings className="h-5 w-5" />,
    //     submenu: true,
    //     key: "configuracion",
    //     items: [
    //         { title: "General", icon: <Settings className="h-4 w-4" />, path: "/admin/configuracion/general" },
    //         { title: "Usuarios", icon: <User className="h-4 w-4" />, path: "/admin/configuracion/usuarios" },
    //     ],
    // },
]