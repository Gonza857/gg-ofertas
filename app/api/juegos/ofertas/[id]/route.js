import container from "@/dominio/container";
import {revalidatePath} from "next/cache";
import CookieManager from "@/dominio/utils/auth/cookiesManager";
import {cookies} from "next/headers";
import ManejadorRespuesta from "@/infraestructura/ManejadorRespuesta";
import {patchOferta} from "@/app/schemas/backend/ofertas";
import e from "jsonwebtoken/lib/JsonWebTokenError";

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

export async function PATCH(req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;

    const body = await req.json();
    const id = res.params.id;

    let nuevosDatos;
    try {
        nuevosDatos = patchOferta.parse(body)
    } catch (error) {
        console.log(error)
        return ManejadorRespuesta.error(error.message)
    }

    try {
        await modeloJuegos.actualizarOferta(id, nuevosDatos);
        return ManejadorRespuesta.ok()
    } catch (e) {
        console.error(e)
        return ManejadorRespuesta.error(e.message)
    }
}