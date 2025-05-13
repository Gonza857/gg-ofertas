import {cookies} from "next/headers";
import {NextResponse} from "next/server";

class ValidadorRol {
    cookieManager
    modeloUsuario
    CUSTOMER = {exito: true, usuario: null}
    NOT_AUTHORIZED = NextResponse.json({exito: false, mensaje: "No autorizado", status: 401})

    constructor(cookieManager, modeloUsuario) {
        this.cookieManager = cookieManager
        this.modeloUsuario = modeloUsuario
    }

    async validarAdmin () {
        const sessionUser = this.cookieManager.get(cookies(), "access-token")
        if (!sessionUser) return this.CUSTOMER
        const usuario = await this.modeloUsuario.obtenerPorCorreo(sessionUser.email)
        if (!usuario) return this.NOT_AUTHORIZED
        return {exito: true, usuario}
    }


}

export default ValidadorRol;