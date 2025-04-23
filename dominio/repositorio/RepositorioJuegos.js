import { serverTimestamp } from "firebase/firestore";

class RepositorioJuegos {

    COLECCION = "ofertas"
    BaseDeDatos

    constructor(bd) {
        this.BaseDeDatos = bd;
    }

    async obtenerJuegos() {
        return await this.BaseDeDatos.obtenerPorId(this.COLECCION, "nbC1nBnbrJarc6vaCbOc");
    }

    async eliminarJuegoEnStock(id) {
        return await this.BaseDeDatos.eliminar("stock-juegos", id)
    }

    async actualizarJuegoEnStock(juego, id) {
        juego.editado = serverTimestamp()
        return await this.BaseDeDatos.actualizar("stock-juegos", juego, id);
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