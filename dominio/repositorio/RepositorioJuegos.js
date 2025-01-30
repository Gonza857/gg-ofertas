class RepositorioJuegos {

    COLECCION = "ofertas"
    BaseDeDatos

    constructor(bd) {
        this.BaseDeDatos = bd;
    }

    async obtenerJuegos() {
        return await this.BaseDeDatos.obtenerPorId(this.COLECCION, "nbC1nBnbrJarc6vaCbOc");
    }

    async subirOfertas(ofertas) {
        return await this.BaseDeDatos.guardarConUID(this.COLECCION, {...ofertas, uid: "nbC1nBnbrJarc6vaCbOc"});
    }
}

export default RepositorioJuegos;