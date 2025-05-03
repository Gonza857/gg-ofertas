import {JuegoClienteDTO} from "@/dominio/utils/dto/juegos";

class ModeloJuegos {
    repositorioJuegos;

    constructor(repositorioJuegos) {
        this.repositorioJuegos = repositorioJuegos;
    }

    obtenerArrayDeConsola(datosConsola) {
        const diccionario = {
            "PS3": ["PS3"],
            "PS4/PS5": ["PS4", "PS5"],
            "PS4": ["PS4"],
            "PS5": ["PS5"]
        }
        if (!diccionario[datosConsola]) return []
        return diccionario[datosConsola]
    }

    #redondearCien(num) {
        const resto = num % 100;
        return resto >= 50 ? Math.ceil(num / 100) * 100 : Math.floor(num / 100) * 100;
    }

    async guardarJuegoStock(juego) {
        if (!juego) throw new Error("No se pudo guardar el juego.")
        juego.precioCliente = Number(juego.precioCliente)
        juego.precioReventa = Number(juego.precioReventa)
        juego.stock = Number(juego.stock)
        const resultado = await this.repositorioJuegos.guardarJuegoStock(juego);
        return {
            exito: resultado,
            mensaje: "Guardado correctamante."
        }
    }

    async actualizarJuegoStock(input) {
        if (!input || !input.id) throw new Error("No se pudo actualizar el juego")
        input.consola = this.obtenerArrayDeConsola(input.consola)
        const resultado = await this.repositorioJuegos.actualizarJuegoEnStock(input, input.id)
        return {
            mensaje: "Juego actualizado correctamante",
            exito: resultado
        }
    }

    async eliminarJuegoStock(id) {
        if (!id) throw new Error("No se pudo eliminar el juego.")
        await this.repositorioJuegos.eliminarJuegoEnStock(id)
        return {
            mensaje: "Juego eliminado correctamente",
            exito: 1,
        }
    }

    #transformarFechaJuegos(arrayJuegos) {
        return arrayJuegos.map((j) => ({...j, editado: j.editado ? new Date(j.editado.toDate()) : "-"}))
    }

    #transformarJuegosCliente(arrayJuegos) {
        return arrayJuegos.map((j) => (new JuegoClienteDTO(j)))
    }

    #filtrarPorConsola(arrayJuegos, consolaBuscada) {
        return arrayJuegos.filter(j => j.consola.includes(consolaBuscada.toUpperCase()))
    }

    #ordenarAlfabeticamente(arrayJuegos) {
        arrayJuegos.sort((a, b) => a.nombre.localeCompare(b.nombre))
    }

    async obtenerJuegosStock(consolaBuscada = null, usuario = null) {
        let juegos = await this.repositorioJuegos.obtenerTodosLosJuegosStock()
        juegos = this.#transformarFechaJuegos(juegos)
        this.#ordenarAlfabeticamente(juegos)

        let filtrados;

        if (consolaBuscada) {
            filtrados = this.#filtrarPorConsola(juegos, consolaBuscada)
        }

        let resultado = consolaBuscada ? filtrados : juegos

        if (usuario) {
            // es admin
        } else {
            // es user normal
        }

        return resultado;
    }

    async obtenerJuegosOfertaReventa() {
        return await this.repositorioJuegos.obtenerJuegos()
    }

    async obtenerJuegosOferta(tipoCliente, usuario) {
        tipoCliente = tipoCliente ?? "customer"

        if (tipoCliente === "admin" && !usuario) throw new Error("No autorizado.")

        const oferta = await this.repositorioJuegos.obtenerJuegos()
        oferta.juegos.forEach((j, i) => {
            j.modoEdicion = false;
            j.id = i;
        })

        if (tipoCliente === "customer") {
            oferta.juegos.forEach((j) => {
                j.precioLista = this.#redondearCien(j.price * 1.25).toFixed(0);
                j.precioTransferencia = this.#redondearCien(j.precioLista * 0.8).toFixed(0);
            })
        } else if (tipoCliente === "reseller") {
            oferta.juegos.forEach((j) => {
                j.price = this.#redondearCien((j.price) * 0.95).toFixed(0)
            })
        } else {
            // Admin
            oferta.juegos.forEach((j) => {
                j.precioReventa = this.#redondearCien((j.price) * 0.95).toFixed(0)
                j.precioClienteLista = this.#redondearCien(j.price * 1.25).toFixed(0);
                j.precioClienteTransferencia = this.#redondearCien(j.precioClienteLista * 0.8).toFixed(0);
            })
        }

        return oferta;
    }

    async actualizarOfertas(ofertasObject, usuario) {
        if (!usuario) throw new Error("No autorizado.")
        delete ofertasObject.exito
        const resultado = await this.repositorioJuegos.actualizarJuegosOferta(ofertasObject)
        if (!resultado) throw new Error("No se pudo actualizar las ofertas.");
    }

    async subirOfertas(ofertas) {
        if (!ofertas) throw new Error("No se recibieron los datos.")
        const resultado = await this.repositorioJuegos.subirOfertas(ofertas)
        if (!resultado) throw new Error("No se puedo actualizar")
        return {
            exito: resultado,
            mensaje: "Ofertas subidas correctamente."
        }
    }
}

export default ModeloJuegos