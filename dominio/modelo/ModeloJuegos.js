class ModeloJuegos {
    repositorioJuegos;

    constructor(repositorioJuegos) {
        this.repositorioJuegos = repositorioJuegos;
    }

    async guardarJuegoStock (juego) {
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

    async obtenerJuegosStock() {
        return await this.repositorioJuegos.obtenerTodosLosJuegosStock()
    }

    async obtenerJuegosOfertaReventa() {
        return await this.repositorioJuegos.obtenerJuegos()
    }

    async subirOfertas (ofertas) {
        if (!ofertas) throw new Error("No se recibieron los datos.")
        console.log("recibo ofertas", ofertas)
        const resultado = await this.repositorioJuegos.subirOfertas(ofertas)
        if (!resultado) throw new Error("No se puedo actualizar")
        return {
            exito: resultado,
            mensaje: "Ofertas subidas correctamente."
        }
    }
}

export default ModeloJuegos