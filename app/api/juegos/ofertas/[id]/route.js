import container from "@/dominio/container";
import {revalidatePath} from "next/cache";
import CookieManager from "@/dominio/utils/auth/cookiesManager";
import {cookies} from "next/headers";
import ManejadorRespuesta from "@/infraestructura/ManejadorRespuesta";

const modeloJuegos = container.resolve("ModeloJuegos");
const modeloUsuario = container.resolve("ModeloUsuario");

const revalidar = () => {
    revalidatePath("/reventa")
    revalidatePath("/")
}

const validarAdmin = async () => {
    const sessionUser = CookieManager.get(cookies(), "access-token");
    if (!sessionUser) return ManejadorRespuesta.CUSTOMER
    const usuario = await modeloUsuario.obtenerPorCorreo(sessionUser.email)
    if (!usuario) return ManejadorRespuesta.NOT_AUTHORIZED
    return {exito: true, usuario}
}

export async function GET(req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;

    const id = res.params.id;

    try {
        const oferta = await modeloJuegos.obtenerPorId(id, resultado.usuario);
        return ManejadorRespuesta.ok({data: oferta})
    } catch (e) {
        console.error(e)
        return ManejadorRespuesta.error(e.message)
    }
}