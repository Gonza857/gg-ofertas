import {getStorage, ref, uploadBytes, getDownloadURL, deleteObject} from "firebase/storage";

class Almacenamiento {

    ALMACENAMIENTO

    constructor(appPrincipal) {
        this.ALMACENAMIENTO = getStorage(appPrincipal);
    }


    /** Subir archivos en formato BLOB
     * @param {string} ruta con nombre de archivo
     * @param blob archivo BLOB
     */
    async subirImagenBlob(ruta, blob) {
        const referenciaAlmacenamiento = ref(this.ALMACENAMIENTO, ruta);
        try {
            await uploadBytes(referenciaAlmacenamiento, blob);
            return await getDownloadURL(referenciaAlmacenamiento);
        } catch (e) {
            console.log(e)
            throw new Error(e.message);
        }
    }

    /** Borrar archivo
     * @param {string} ruta con nombre de archivo
     * @param id
     */
    async borrarArchivo(ruta) {
        const referenciaAlmacenamiento = ref(this.ALMACENAMIENTO, ruta);
        try {
            await deleteObject(referenciaAlmacenamiento);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async obtenerArchivoPorId(ruta, id) {
        const referenciaAlmacenamiento = ref(this.ALMACENAMIENTO, `${ruta}/${id}`);
        try {
            return await getDownloadURL(referenciaAlmacenamiento);
        } catch (e) {
            throw new Error(e.message);
        }
    }


}

export default Almacenamiento;