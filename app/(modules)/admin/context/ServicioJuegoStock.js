import {formatearJuego} from "@/dominio/utils/juegos-stock/utils";
import {actualizarJuegoStock} from "@/dominio/servicios/stock-juegos";
import {toastError, toastSuccess} from "@/lib/Toast";

class ServicioJuegoStock {

    static formatearJuego = (juego) => {
        juego.precioCliente = Number(juego.precioCliente)
        juego.precioReventa = Number(juego.precioReventa)
        juego.stock = Number(juego.stock)
        juego.consola = ServicioJuegoStock.obtenerArrayDeConsola(juego.consola)
        juego.editado = new Date();
    }

    static obtenerPorId = (arrayJuegos, idJuego) => {
        return arrayJuegos.find(x => x.id === idJuego)
    }

    static actualizarStock = (idJuego, cantidad, array) => {
        return array.map((game) => (game.id === idJuego ? {...game, stock: Math.max(0, game.stock + cantidad)} : game))
    }

    static actualizarJuegoBD = async (juego) => {
        ServicioJuegoStock.formatearJuego(juego)
        const resultado = await actualizarJuegoStock(juego)
        if (resultado.exito) {
            toastSuccess("Stock actualizado correctamente")
        } else {
            toastError("No se pudo actualizar el stock")
        }
    }

    static reordenar = (juegos) => {
        return [...juegos].sort((a, b) => a.nombre.localeCompare(b.nombre))
    }

    static buscarJuegoEnArray = (array, nombre) => {
        return [...array].filter((j) => {
            return j.nombre.toLowerCase().includes(nombre.toLowerCase())
        });
    }

    static obtenerArrayDeConsola = (datosConsola) => {
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
}

export default ServicioJuegoStock;