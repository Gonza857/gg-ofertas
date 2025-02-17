class ModeloJuegos {
    repositorioJuegos;

    constructor(repositorioJuegos) {
        this.repositorioJuegos = repositorioJuegos;
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

    async obtenerJuegosStock() {
        const juegos = await this.repositorioJuegos.obtenerTodosLosJuegosStock()
        return juegos.sort((a, b) => a.nombre.localeCompare(b.nombre));
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