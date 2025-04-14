const usdPorCliente = 1300
const usdPorReventa = 1200

export const tarjetasPsn = [
    {
        nombre: "PlayStation Gift Card 1 USD",
        region: "USA",
        precioCliente: 2700, // bsv * 1270 * 1.2 = resultado * 1.1
        precioReventa: 2500, // bsv * 1270 * 1.2 = resultado
        showToCustomer: true,
        imagen: "/images/psncard/psn10.jpeg"
    },
    {
        nombre: "PlayStation Gift Card 5 USD",
        region: "USA",
        precioCliente: 9700, // bsv * 1270 * 1.2 = resultado * 1.1
        precioReventa: 8800, // bsv * 1270 * 1.2 = resultado
        showToCustomer: true,
        imagen: "/images/psncard/psn10.jpeg"
    },
    {
        nombre: "PlayStation Gift Card 10 USD",
        region: "USA",
        precioCliente: 10 * usdPorCliente,
        precioReventa: 10 * usdPorReventa,
        showToCustomer: true,
        imagen: "/images/psncard/psn10.jpeg"
    },
    {
        nombre: "PlayStation Gift Card 25 USD",
        region: "USA",
        precioCliente: 25 * usdPorCliente,
        precioReventa: 25 * usdPorReventa,
        showToCustomer: true,
        imagen: "/images/psncard/psn25.jpeg"
    },
    {
        nombre: "PlayStation Gift Card 50 USD",
        region: "USA",
        precioCliente: 50 * usdPorCliente,
        precioReventa: 50 * usdPorReventa,
        showToCustomer: true,
        imagen: "/images/psncard/psn50.jpeg"
    },
    {
        nombre: "PlayStation Gift Card 60 USD",
        region: "USA",
        precioCliente: 60 * usdPorCliente,
        precioReventa: 60 * usdPorReventa,
        showToCustomer: true,
        imagen: "/images/psncard/psn60.jpeg"
    },
    {
        nombre: "PlayStation Gift Card 75 USD",
        region: "USA",
        precioCliente: 75 * usdPorCliente,
        precioReventa: 75 * usdPorReventa,
        showToCustomer: true,
        imagen: "/images/psncard/psn75.jpeg"
    },
    {
        nombre: "PlayStation Gift Card 100 USD",
        region: "USA",
        precioCliente: 100 * usdPorCliente,
        precioReventa: 100 * usdPorReventa,
        showToCustomer: true,
        imagen: "/images/psncard/psn100.jpeg"
    }
];

export const tarjetasSteam = [
    {
        nombre: "Steam Gift Card 10 USD",
        region: "USA/ARG",
        precioCliente: 16000,
        precioReventa: 15000,
        showToCustomer: true,
    },
    {
        nombre: "Steam Gift Card 25 USD",
        region: "USA/ARG",
        precioCliente: 40000,
        precioReventa: 37500,
        showToCustomer: true,
    },
    {
        nombre: "Steam Gift Card 50 USD",
        region: "USA/ARG",
        precioCliente: 80000,
        precioReventa: 75000,
        showToCustomer: true,
    },
    {
        nombre: "Steam Gift Card 60 USD",
        region: "USA/ARG",
        precioCliente: 96000,
        precioReventa: 90000,
        showToCustomer: true,
    },
    {
        nombre: "Steam Gift Card 70 USD",
        region: "USA/ARG",
        precioCliente: 112000,
        precioReventa: 105000,
        showToCustomer: true,
    },
    {
        nombre: "Steam Gift Card 75 USD",
        region: "USA/ARG",
        precioCliente: 120000,
        precioReventa: 112500,
        showToCustomer: true,
    },
    {
        nombre: "Steam Gift Card 100 USD",
        region: "USA/ARG",
        precioCliente: 160000,
        precioReventa: 150000,
        showToCustomer: true,
    }
];

export const tarjetasPsnTq = [
    {
        nombre: "PlayStation Gift Card 250TL",
        region: "TQ",
        precioCliente: 0,
        precioReventa: 10500,
        showToCustomer: false,
        imagen: ""
    },
    {
        nombre: "PlayStation Gift Card 500 TL",
        region: "TQ",
        precioCliente: 0,
        precioReventa: 21500,
        showToCustomer: false,
        imagen: ""
    },
    {
        nombre: "PlayStation Gift Card 1000 TL",
        region: "TQ",
        precioCliente: 0,
        precioReventa: 42000,
        showToCustomer: false,
        imagen: ""
    }
]