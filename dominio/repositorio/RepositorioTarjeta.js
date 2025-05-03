import {serverTimestamp} from "firebase/firestore";

class RepositorioTarjeta {
    baseDeDatos;
    COLECCION = "tarjetas"

    constructor(baseDeDatos) {
        this.baseDeDatos = baseDeDatos;
    }

    async obtenerTodas() {
        return await this.baseDeDatos.obtenerTodos(this.COLECCION)
    }

    async guardar (tarjeta) {
        tarjeta.editado = serverTimestamp()
        return await this.baseDeDatos.guardarConUID(this.COLECCION, tarjeta);
    }

    async eliminar (idTarjeta) {
        return await this.baseDeDatos.eliminar(this.COLECCION, idTarjeta);
    }

    async actualizar (tarjeta) {
        return await this.baseDeDatos.actualizar(this.COLECCION, tarjeta, tarjeta.id);
    }

}

export default RepositorioTarjeta;