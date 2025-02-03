class RepositorioPlus {
    baseDeDatos;
    COLECCION = "playstationplus"
    constructor(baseDeDatos) {
        this.baseDeDatos = baseDeDatos;
    }

    async guardar (plus) {
        return await this.baseDeDatos.guardar(this.COLECCION, plus);
    }

    async actualizar (plus) {
        return await this.baseDeDatos.actualizar(this.COLECCION, plus, plus.id);
    }

    async eliminar (idPlus) {
        return await this.baseDeDatos.eliminar(this.COLECCION, idPlus);
    }

    async obtenerTodasStock () {
        return await this.baseDeDatos.obtenerTodos(this.COLECCION);
    }
}

export default RepositorioPlus;