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

    async obtenerTodasLasOfertas() {
        return await this.BaseDeDatos.obtenerTodos(this.COLECCION);
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

    async actualizarJuegosOferta (ofertasObject) {
        return await this.BaseDeDatos.actualizar("ofertas", ofertasObject, ofertasObject.id)
    }

    async guardarOferta(ofertas) {
        return await this.BaseDeDatos.guardar(this.COLECCION, ofertas);
    }

    async obtenerOfertaActual () {
        return await this.BaseDeDatos.buscarUnoPorAtributo(this.COLECCION, "estaActiva", true)
    }

    async obtenerOfertaPorAtributoValor (atributo, valor) {
        return await this.BaseDeDatos.buscarUnoPorAtributo(this.COLECCION, atributo, valor)
    }

    async obtenerOfertaPorId(id) {
        return await this.BaseDeDatos.obtenerPorId(this.COLECCION, id);
    }

    async guardarJuegoStock (juego) {
        return await this.BaseDeDatos.guardar("stock-juegos", juego);
    }
}

export default RepositorioJuegos;