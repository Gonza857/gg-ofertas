export const formatearJuego = (juego) => {
    juego.precioCliente = Number(juego.precioCliente)
    juego.precioReventa = Number(juego.precioReventa)
    juego.stock = Number(juego.stock)
    juego.consola = obtenerArrayDeConsola(juego.consola)
}

const obtenerArrayDeConsola = (datosConsola) => {
    if (Array.isArray(datosConsola)) {
        return datosConsola
    }
    const diccionario = {
        "PS3": ["PS3"],
        "PS4/PS5": ["PS4", "PS5"],
        "PS4": ["PS4"],
        "PS5": ["PS5"]
    }
    if (!diccionario[datosConsola]) return []
    return diccionario[datosConsola]
}