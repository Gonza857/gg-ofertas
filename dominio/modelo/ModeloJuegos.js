class ModeloJuegos {
    repositorioJuegos;

    constructor(repositorioJuegos) {
        this.repositorioJuegos = repositorioJuegos;
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