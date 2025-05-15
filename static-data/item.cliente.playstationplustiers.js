export const psplustiers = [
    {
        name: "Essential",
        headerClass: "bg-gray-200 text-black", // Fondo gris, texto negro
        borderClass: "border-gray-400",
        features: [
            "Juegos mensuales (2-3 juegos)",
            "Multijugador online",
        ],
    },
    {
        name: "Extra",
        headerClass: "plusExtra text-black", // Fondo amarillo/dorado, texto negro
        borderClass: "border-amber-500",
        features: [
            "Todo lo de Essential",
            "Catálogo de juegos (400+ títulos PS4/PS5)",
            "Juegos de Ubisoft+",
            "Versiones de prueba de juegos",
        ],
        hasAdditionalPoints: true,
        additionalPoints: [
            {
                titulo: "Ver catálogo",
                link: "https://www.playstation.com/es-ar/ps-plus/games/?category=GAME_CATALOG#plus-container"
            }
        ]
    },
    {
        name: "Deluxe",
        headerClass: "bg-black plusDeluxe", // Fondo negro, texto amarillo/dorado
        borderClass: "border-black",
        features: [
            "Todo lo de Essential y Extra",
            "Catálogo de clásicos (PS1, PS2, PSP)",
            "Versiones remasterizadas",
            "Pruebas de juegos por tiempo limitado",
        ],
        hasAdditionalPoints: true,
        additionalPoints: [
            {
                titulo: "Ver catálogo clásicos",
                link: "https://www.playstation.com/es-ar/ps-plus/games/?category=CLASSICS_CATALOG#plus-container"
            }
        ]
    },
]
