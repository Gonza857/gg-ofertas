class ModeloUsuario {
    repositorioUsuario;

    constructor(repositorioUsuario) {
        this.repositorioUsuario = repositorioUsuario;
    }

    async guardar(email) {
        if (!email) throw new Error("Faltan parametros.")
        const resultado = await this.repositorioUsuario.guardar({email});
        if (!resultado) throw new Error("No se pudo guardar.")
        return {
            exito: true,
            mensaje: "Usuario registrado correctamente"
        }
    }

    async obtenerPorCorreo(email) {
        if (!email) throw new Error("Faltan parametros.")
        return await this.repositorioUsuario.obtenerPorEmail(email);
    }

    async obtenerPorId (id) {
        if (!id) throw new Error("Faltan parametros.")
        const resultado = await this.repositorioUsuario.obtenerPorId(id);
        if (!resultado) throw new Error("No se pudo obtener.")
        return {
            exito: true,
            usuario: resultado,
        }
    }


}

export default ModeloUsuario;