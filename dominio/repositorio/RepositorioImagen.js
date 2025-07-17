class RepositorioImagen {

    baseDeDatos;
    almacenamiento;

    constructor(baseDeDatos, almacenamiento) {
        this.baseDeDatos = baseDeDatos;
        this.almacenamiento = almacenamiento;
    }

    // No uso este metodo porque tiene baseDeDatos.actualizar
    async guardar(imagenBlob, id, rutaColeccion, nombreColeccion) {
        return await this.almacenamiento.subirImagenBlob(`${rutaColeccion}/${id}`, imagenBlob)
    }

    async eliminarDeAlmacenamiento(rutaColeccion, id) {
        await this.almacenamiento.borrarArchivo(`${rutaColeccion}/${id}`)
    }

    async obtenerImagenPorId(id) {
        return await this.almacenamiento.obtenerArchivoPorId("/productos", id)
    }

    async guardarImagenDeProducto(imagenBlob, id) {
        return await this.almacenamiento.subirImagenBlob(`/productos/${id}`, imagenBlob)
    }

    async invertirEstado(idDocumento, campo) {
        await this.baseDeDatos.invertirValorBooleano(this.coleccionNombre, idDocumento, campo);
    }

    async actualizar(objeto, id) {
        return await this.baseDeDatos.actualizar(this.coleccionNombre, objeto, id);
    }

    async obtenerPorRuta(pertenencia) {
        return await this.baseDeDatos.buscarVariosPorAtributo(this.coleccionNombre, "pertenencia", pertenencia)
    }



    async eliminarProductoDeAlmacenamiento(id) {
        await this.almacenamiento.borrarArchivo("/productos", id)
    }


}

export default RepositorioImagen