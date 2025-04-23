class ModeloJuegos {
    repositorioJuegos;

    constructor(repositorioJuegos) {
        this.repositorioJuegos = repositorioJuegos;
    }

    obtenerArrayDeConsola (datosConsola)  {
        const diccionario = {
            "PS3": ["PS3"],
            "PS4/PS5": ["PS4", "PS5"],
            "PS4": ["PS4"],
            "PS5": ["PS5"]
        }
        if (!diccionario[datosConsola]) return []
        return diccionario[datosConsola]
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
        console.log("voy a guardar", input)
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

    async obtenerJuegosStock(consoleSearched = null) {
        let juegos = await this.repositorioJuegos.obtenerTodosLosJuegosStock()
        juegos = juegos.map((j)=>({...j, editado: j.editado ? new Date(j.editado.toDate()) : "-"}))
        let filtrados;
        if (consoleSearched !== "undefined" && consoleSearched != null) {
            filtrados = juegos.filter(j => j.consola.includes(consoleSearched.toUpperCase()))
        } else {
            juegos.sort((a, b) => a.nombre.localeCompare(b.nombre))
        }

        return consoleSearched !== "undefined" ? filtrados : juegos;
    }

    async obtenerJuegosOfertaReventa() {
        return await this.repositorioJuegos.obtenerJuegos()
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