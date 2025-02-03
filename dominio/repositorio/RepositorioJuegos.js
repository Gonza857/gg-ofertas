class RepositorioJuegos {

    COLECCION = "ofertas"
    BaseDeDatos

    constructor(bd) {
        this.BaseDeDatos = bd;
    }

    async obtenerJuegos() {
        return await this.BaseDeDatos.obtenerPorId(this.COLECCION, "nbC1nBnbrJarc6vaCbOc");
    }

    async obtenerTodosLosJuegosStock() {
        return await this.BaseDeDatos.obtenerTodos("stock-juegos")
    }

    async subirOfertas(ofertas) {
        return await this.BaseDeDatos.guardarConUID(this.COLECCION, {...ofertas, uid: "nbC1nBnbrJarc6vaCbOc"});
    }

    async guardarJuegoStock (juego) {
        return await this.BaseDeDatos.guardar("stock-juegos", juego);
    }
}

export default RepositorioJuegos;