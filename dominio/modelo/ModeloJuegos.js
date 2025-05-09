import {JuegoClienteDTO} from "@/dominio/utils/dto/juegos";
import {id} from "date-fns/locale";

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
        arrayJuegos.sort((a, b) => a.name.localeCompare(b.name))
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

    async obtenerJuegosOferta(tipoCliente, usuario, quiereTodas) {
        tipoCliente = tipoCliente ?? "customer"

        if (tipoCliente === "admin" && !usuario) throw new Error("No autorizado.")

        let oferta;

        if (tipoCliente === "customer") {
            oferta = await this.repositorioJuegos.obtenerOfertaActual()
            this.#formatearJuegosParaPresentar(tipoCliente, oferta.juegos)

        } else if (tipoCliente === "reseller") {
            oferta = await this.repositorioJuegos.obtenerOfertaActual()
            this.#formatearJuegosParaPresentar(tipoCliente, oferta.juegos)
        } else {
            // Admin
            if (quiereTodas && quiereTodas === "true") {
                // quiere ver todas
                oferta = await this.repositorioJuegos.obtenerTodasLasOfertas();
                oferta.forEach((o) => {
                    this.#formatearJuegosParaPresentar(tipoCliente, o.juegos)
                })
                return oferta
            } else {
                // quiere ver una en específico
                oferta = await this.repositorioJuegos.obtenerOfertaActual()
                this.#formatearJuegosParaPresentar(tipoCliente, oferta.juegos)

            }
        }

        this.#ordenarPorDestacadoAndTitulo(oferta.juegos)
        return oferta;
    }

    #ordenarPorDestacadoAndTitulo (arrayJuegos) {
        return arrayJuegos.sort((a, b) => {
            // Destacados primero
            if (a.esDestacado !== b.esDestacado) {
                return a.esDestacado ? -1 : 1;
            }
            // Si ambos son o no son destacados, ordenar por título
            return a.name.localeCompare(b.name);
        });
    }

    #formatearJuegosParaPresentar(cliente = "customer", arrayJuegos) {
        if (cliente === "admin") {
            arrayJuegos.forEach((j, i) => {
                j.precioReventa = this.#redondearCien((j.price) * 0.95).toFixed(0)
                j.precioClienteLista = this.#redondearCien(j.price * 1.25).toFixed(0);
                j.precioClienteTransferencia = this.#redondearCien(j.precioClienteLista * 0.8).toFixed(0);
                j.modoEdicion = false;
                j.id = i;
            })
        } else if (cliente === "reseller") {
            arrayJuegos.forEach((j) => {
                j.price = this.#redondearCien((j.price) * 0.95).toFixed(0)
            })
        }
        arrayJuegos.forEach((j) => {
            j.precioLista = this.#redondearCien(j.price * 1.25).toFixed(0);
            j.precioTransferencia = this.#redondearCien(j.precioLista * 0.8).toFixed(0);
        })
    }


    async actualizarOfertas(ofertasObject, usuario) {
        if (!usuario) throw new Error("No autorizado.")
        delete ofertasObject.exito

        if (ofertasObject.accion === 0) {
            // cambia destacado
            console.log("Actualización de destacado")
            ofertasObject.juegos.forEach((j) => {
                j.name = `${j.esDestacado ? "⭐" : "💎"} ${j.name.replace(/^(\⭐|💎)\s*/, '')}`
            })
        }

        if (ofertasObject.nuevo) {
            ofertasObject.nuevo.name = "💎 " + ofertasObject.nuevo.name
            ofertasObject.juegos = [...ofertasObject.juegos, ofertasObject.nuevo];
            delete ofertasObject.nuevo;
        }

        this.#formatearJuegosParaPresentar("admin", ofertasObject.juegos)

        const resultado = await this.repositorioJuegos.actualizarJuegosOferta(ofertasObject)
        if (!resultado) throw new Error("No se pudo actualizar las ofertas.");
    }

    async eliminarJuegoDeOferta({idJuego, idOferta}, usuario) {
        if (!idJuego && !idOferta && !usuario) throw new Error("No autorizado.")
        const oferta = await this.repositorioJuegos.obtenerOfertaPorId(idOferta);
        if (!oferta) throw new Error("No se encontró la oferta.")
        oferta.juegos = oferta.juegos.filter(j => j.id !== idJuego)
        const resultadoActualizacion = await this.repositorioJuegos.actualizarJuegosOferta(oferta)
        if (!resultadoActualizacion) throw new Error("No se pudo actualizar.")
        return true
    }

    async obtenerPorId(id, usuario) {
        if (!id && !usuario) throw new Error("No autorizado.")
        const oferta = await this.repositorioJuegos.obtenerOfertaPorId(id);
        if (!oferta) return null;
        this.#formatearJuegosParaPresentar("admin", oferta.juegos)
        this.#ordenarAlfabeticamente(oferta.juegos);
        return oferta

    }

    async subirOfertas(ofertaNueva) {
        if (!ofertaNueva) throw new Error("No se recibieron los datos.")


        const {juegos} = ofertaNueva;

        ofertaNueva.estaActiva = false;

        juegos.forEach((j, i) => {
            j.modoEdicion = false;
            j.id = i;
            j.precioReventa = Number(this.#redondearCien((j.price) * 0.95).toFixed(0))
            j.precioClienteLista = Number(this.#redondearCien(j.price * 1.25).toFixed(0))
            j.precioClienteTransferencia = Number(this.#redondearCien(j.precioClienteLista * 0.8).toFixed(0));
        })

        const resultado = await this.repositorioJuegos.guardarOferta(ofertaNueva)
        if (!resultado) throw new Error("No se puedo actualizar")

        return {
            exito: resultado,
            mensaje: "Ofertas subidas correctamente."
        }
    }
}

export default ModeloJuegos