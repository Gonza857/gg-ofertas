import { serverTimestamp } from "firebase/firestore";

class RepositorioJuegos {

    COLECCION = "ofertas"
    BaseDeDatos

    constructor(bd) {
        this.BaseDeDatos = bd;
    }

    // OFERTAS
    async obtenerOfertaPorId(id) {
        return await this.BaseDeDatos.obtenerPorId(this.COLECCION, id);
    }
    async obtenerTodasLasOfertasConFiltro(filtros) {
        return await this.BaseDeDatos.buscarVariosPorAtributo(this.COLECCION, filtros)
    }
    async actualizarJuegosOferta (ofertasObject) {
        return await this.BaseDeDatos.actualizar("ofertas", ofertasObject, ofertasObject.id)
    }
    async obtenerOfertaActual (filtros) {
        return await this.BaseDeDatos.buscarUnoPorAtributos(this.COLECCION, filtros)
    }

    // STOCK JUEGOS
    async obtenerJuegos() {
        return await this.BaseDeDatos.obtenerPorId(this.COLECCION, "nbC1nBnbrJarc6vaCbOc");
    }

    async obtenerTodasLasOfertas() {
        return await this.BaseDeDatos.obtenerTodos(this.COLECCION);
    }

    // PREVENTA JUEGOS
    async guardarPreventa(preventa) {
        preventa.editado = serverTimestamp()
        return await this.BaseDeDatos.guardarConUID("preventas", preventa);
    }
    async obtenerPreventas() {
        return await this.BaseDeDatos.obtenerTodos("preventas");
    }
    async obtenerPreventaPorId(id) {
        return await this.BaseDeDatos.obtenerPorId("preventas", id);
    }
    async actualizarPreventa(preventa, id) {
        return await this.BaseDeDatos.actualizar("preventas", preventa, id)
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



    async guardarOferta(ofertas) {
        return await this.BaseDeDatos.guardar(this.COLECCION, ofertas);
    }




    async obtenerOfertaPorAtributoValor (atributo, valor) {
        return await this.BaseDeDatos.buscarUnoPorAtributo(this.COLECCION, atributo, valor)
    }



    async guardarJuegoStock (juego) {
        return await this.BaseDeDatos.guardar("stock-juegos", juego);
    }
}

export default RepositorioJuegos;