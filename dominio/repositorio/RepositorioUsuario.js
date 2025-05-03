class RepositorioUsuario {
    baseDeDatos;
    COLECCION = "usuario"

    constructor(baseDeDatos) {
        this.baseDeDatos = baseDeDatos;
    }

    async guardar (usuario) {
        return await this.baseDeDatos.guardar(this.COLECCION, usuario);
    }

    async obtenerPorEmail(email) {
        return await this.baseDeDatos.buscarUnoPorAtributo(this.COLECCION, "email", email);
    }

    async obtenerPorId(id) {
        return await this.baseDeDatos.obtenerPorId(this.COLECCION, id);
    }

}

export  default RepositorioUsuario;