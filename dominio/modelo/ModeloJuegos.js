import {JuegoClienteDTO} from "@/dominio/utils/dto/juegos";
import {id} from "date-fns/locale";
import JuegoOferta, {JuegoOfertaAdmin, JuegoOfertaCliente, JuegoOfertaRevendedor} from "@/app/entities/JuegoOferta";
import JuegoPreventa from "@/app/entities/JuegoPreventa";
import {JuegoStockAdmin, JuegoStockCliente} from "@/app/entities/JuegoStock";

class ModeloJuegos {
    repositorioJuegos;
    tipoCliente = {
        ADMIN: "admin",
        RESELLER: "reseller",
        CUSTOMER: "customer",
    }

    constructor(repositorioJuegos) {
        this.repositorioJuegos = repositorioJuegos;
    }

    obtenerArrayDeConsola(datosConsola) {
        if (Array.isArray(datosConsola)) return datosConsola;
        const diccionario = {
            "PS3": ["PS3"],
            "PS4/PS5": ["PS4", "PS5"],
            "PS4": ["PS4"],
            "PS5": ["PS5"]
        }
        if (!diccionario[datosConsola]) return []
        return diccionario[datosConsola]
    }

    async crearPreventa(preventaObject) {
        const preventa = new JuegoPreventa(preventaObject)
        await this.repositorioJuegos.guardarPreventa({...preventa})
    }

    async obtenerPreventas() {
        return await this.repositorioJuegos.obtenerPreventas()
    }

    async obtenerPreventaPorId(id) {
        if (!id) throw new Error("Error al obtener preventa.")
        return await this.repositorioJuegos.obtenerPreventaPorId(id)
    }

    async actualizarPreventa(preventaInput, id) {
        if (!preventaInput && !id) throw new Error("Error altualizar oferta.");
        const preventa = await this.repositorioJuegos.obtenerPreventaPorId(id);
        if (!preventa) throw new Error("Error altualizar oferta.");
        Object.assign(preventa, preventaInput)
        await this.repositorioJuegos.actualizarPreventa(preventa, id)
    }

    async guardarJuegoStock(juego) {
        if (!juego) throw new Error("No se pudo guardar el juego.")
        juego.precioCliente = Number(juego.precioCliente)
        juego.precioReventa = Number(juego.precioReventa)
        juego.stock = Number(juego.stock)
        const resultado = await this.repositorioJuegos.guardarJuegoStock(juego);
        return {
            exito: resultado,
            mensaje: "Guardado correctamante.",
            data: juego
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
        juegos.sort((a, b) => a.nombre.localeCompare(b.nombre))

        let filtrados;

        if (consolaBuscada) {
            filtrados = this.#filtrarPorConsola(juegos, consolaBuscada)
        }

        let resultado = consolaBuscada ? filtrados : juegos

        if (usuario) {
            resultado = resultado.map(r => new JuegoStockAdmin(r));
        } else {
            // es user normal
        }

        return resultado;
    }

    async obtenerJuegosOfertaReventa() {
        return await this.repositorioJuegos.obtenerJuegos()
    }

    async actualizarOferta(id, nuevosDatos = null) {
        if (!nuevosDatos) throw new Error("Error altualizar oferta.");
        const oferta = await this.repositorioJuegos.obtenerOfertaPorId(id);
        if (!oferta) throw new Error("Error altualizar oferta.");
        Object.assign(oferta, nuevosDatos)
        if (!oferta.estaActiva) oferta.prioridad = null;
        await this.repositorioJuegos.actualizarJuegosOferta(oferta)
    }

    async obtenerOferta(id) {

    }

    async obtenerOfertaActual() {
        const filtros = [
            {atributo: "estaActiva", valor: true},
            {atributo: "prioridad", valor: 1},
        ]
        return await this.repositorioJuegos.obtenerOfertaActual(filtros)
    }

    async obtenerJuegosOferta(
        tipoCliente = "customer",
        usuario,
        quiereTodas,
        nroOferta,
        estaActiva = true
    ) {

        if (tipoCliente === "admin" && !usuario) throw new Error("No autorizado.")
        if (isNaN(Number(nroOferta))) throw new Error("Error al obtener las ofertas.")

        // convertir nro a prioridad oferta

        // Oferta principal si es revendedor o cliente
        if (
            nroOferta === 1 &&
            (
                tipoCliente === this.tipoCliente.RESELLER ||
                tipoCliente === this.tipoCliente.CUSTOMER
            )
        ) {
            const filtros = [
                {atributo: "estaActiva", valor: true},
                {atributo: "prioridad", valor: 1},
            ]
            let oferta = await this.repositorioJuegos.obtenerOfertaActual(filtros)
            this.#ordenarPorDestacadoAndTitulo(oferta.juegos)
            oferta.juegos = this.#formatearJuegosParaPresentar(tipoCliente, oferta.juegos);
            return oferta;
        }

        // Si es admin de aca para abajo

        const filtros = [
            // {atributo: "nro", valor: Number(nroOferta)},
            {atributo: "estaActiva", valor: estaActiva}
        ]

        try {
            let ofertas = await this.repositorioJuegos.obtenerTodasLasOfertasConFiltro(filtros)
            ofertas.forEach((o) => this.#formatearJuegosParaPresentar(tipoCliente, o.juegos))
            return ofertas
        } catch (e) {
            console.log(e)
            return []
        }

        // console.log(ofertas)
        // console.log("ofertas obtenidas", ofertas.length)
        // this.#excluirJuegos(ofertas)
        // console.log("ofertas filtradas", ofertas)

        // if (tipoCliente === this.tipoCliente.CUSTOMER || tipoCliente === this.tipoCliente.RESELLER) {
        //     this.#formatearJuegosParaPresentar(tipoCliente, oferta.juegos)
        // } else {
        //     // Admin
        //     if (quiereTodas && quiereTodas === "true") {
        //         // quiere ver todas
        //         oferta = await this.repositorioJuegos.obtenerTodasLasOfertas();
        //         oferta.forEach((o) => {
        //             this.#formatearJuegosParaPresentar(tipoCliente, o.juegos)
        //         })
        //         this.#excluirJuegos(oferta);
        //         return oferta
        //     } else {
        //         // quiere ver una en específico
        //         this.#formatearJuegosParaPresentar(tipoCliente, oferta.juegos)
        //
        //     }
        // }
        //
        // this.#ordenarPorDestacadoAndTitulo(oferta.juegos)
        // this.#excluirJuegos(oferta);
        // return ofertas;
    }

    #excluirJuegos(ofertas) {
        ofertas.forEach((oferta) => {
            delete oferta.juegos
        })
    }

    #ordenarPorDestacadoAndTitulo(arrayJuegos) {
        console.log("arary de juegos para ordenar", arrayJuegos)
        arrayJuegos.sort((a, b) => {
            // Destacados primero
            if (a.esDestacado !== b.esDestacado) {
                return a.esDestacado ? -1 : 1;
            }
            // Si ambos son o no son destacados, ordenar por título
            return a.nombre.localeCompare(b.nombre);
        });
    }

    #formatearJuegosParaPresentar(cliente = "customer", arrayJuegos) {
        if (cliente === "admin")
            return arrayJuegos.map((j, i) => new JuegoOfertaAdmin(j, i))

        if (cliente === "reseller")
            return arrayJuegos.map((j, i) => new JuegoOfertaRevendedor(j, i));

        return arrayJuegos.map((j, i) => new JuegoOfertaCliente(j, i));
    }


    async actualizarOfertas(ofertasObject, usuario) {
        if (!usuario) throw new Error("No autorizado.")
        if (!ofertasObject) throw new Error("No se pudo actualizar.")
        ofertasObject.juegos = this.#formatearJuegosParaPresentar("admin", ofertasObject.juegos)
        // delete ofertasObject.exito
        //
        // if (ofertasObject.accion === 0) {
        //     // cambia destacado
        //     ofertasObject.juegos.forEach((j) => {
        //         j.name = `${j.esDestacado ? "⭐" : "💎"} ${j.name.replace(/^(\⭐|💎)\s*/, '')}`
        //     })
        // }
        //
        // if (ofertasObject.nuevo) {
        //     ofertasObject.nuevo.name = "💎 " + ofertasObject.nuevo.name
        //     ofertasObject.juegos = [...ofertasObject.juegos, ofertasObject.nuevo];
        //     delete ofertasObject.nuevo;
        // }
        //
        // this.#formatearJuegosParaPresentar("admin", ofertasObject.juegos)
        //

        ofertasObject.juegos = this.#convertirJuegosObjectNormal(ofertasObject.juegos)
        const resultado = await this.repositorioJuegos.actualizarJuegosOferta(ofertasObject)
        if (!resultado) throw new Error("No se pudo actualizar las ofertas.");
    }

    #convertirJuegosObjectNormal(juegos) {
         return juegos.map(j => ({...j}))
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
        console.log("oferta encontrada", oferta)
        oferta.juegos = this.#formatearJuegosParaPresentar("admin", oferta.juegos)
        this.#ordenarPorDestacadoAndTitulo(oferta.juegos)
        return oferta

    }

    async subirOfertas(ofertaNueva) {
        if (!ofertaNueva) throw new Error("No se recibieron los datos.")

        ofertaNueva.estaActiva = false;

        ofertaNueva.juegos.forEach((j, i) => {
            this.calcularPrecios(j)
            this.convertirParaGuardar(j, i)
        })

        console.log("oferta nueva GUARDO BACK", ofertaNueva)

        const resultado = await this.repositorioJuegos.guardarOferta(ofertaNueva)
        if (!resultado) throw new Error("No se puedo actualizar")

        return {
            exito: resultado,
            mensaje: "Ofertas subidas correctamente."
        }
    }

    convertirParaGuardar (juego, i) {
        juego.id = i
        juego.esDestacado = false
    }

    calcularPrecios (juego) {
        juego.precioClienteLista = Number(this.redondearCien(juego.precioBase * 1.25).toFixed(0))
        juego.precioClienteTransferencia = Number(this.redondearCien(juego.precioClienteLista * 0.8).toFixed(0))
        juego.precioReventa = Number(this.redondearCien((juego.precioBase) * 0.95).toFixed(0))
    }

    redondearCien(num) {
        const resto = num % 100;
        return resto >= 50 ? Math.ceil(num / 100) * 100 : Math.floor(num / 100) * 100;
    }
}

export default ModeloJuegos