import {NextResponse} from "next/server";
import container from "@/dominio/container";
import {revalidatePath} from "next/cache";
import {cookies} from "next/headers";
import ManejadorRespuesta from "@/infraestructura/ManejadorRespuesta";
import CookieManager from "@/dominio/utils/auth/cookiesManager";
import {juegosOferta, patchOferta} from "@/app/schemas/backend/ofertas";
import UrlParametersHandlers from "@/app/helpers/UrlParametersHandlers";

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

    const parametrosNecesarios = [
        "cliente", "todas", "nro", "estaActiva"
    ]
    const parametros = UrlParametersHandlers.obtenerParametros(parametrosNecesarios, req)

    const {cliente, todas, nro, estaActiva} = juegosOferta.parse(parametros)

    try {
        const ofertas =
            await modeloJuegos.obtenerJuegosOferta(
                cliente, resultado.usuario, todas, nro, estaActiva
            );
        return ManejadorRespuesta.ok(ofertas)
    } catch (e) {
        console.log(e.message)
        return ManejadorRespuesta.error(e.message)
    }
}

export async function POST(req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;
    const body = await req.json()

    let nuevosDatos;
    try {
        nuevosDatos = patchOferta.parse(body)
    } catch (error) {
        console.log(error)
        return ManejadorRespuesta.error(error.message)
    }

    try {
        await modeloJuegos.subirOfertas(nuevosDatos);
        revalidar()
        return ManejadorRespuesta.ok()
    } catch (e) {
        return ManejadorRespuesta.error(e.message)
    }
}

export async function PATCH(req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;
    const body = await req.json();

    let nuevosDatos;
    try {
        nuevosDatos = patchOferta.parse(body)
    } catch (error) {
        console.log(error)
        return ManejadorRespuesta.error(error.message)
    }


    try {
        await modeloJuegos.actualizarOfertas(nuevosDatos, resultado.usuario);
        // revalidar()
        return ManejadorRespuesta.ok();
    } catch (e) {
        console.error(e)
        return ManejadorRespuesta.error(e.message)
    }
}

export async function DELETE(req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;

    try {
        const cuerpo = await req.json();
        await modeloJuegos.eliminarJuegoDeOferta(cuerpo, resultado.usuario);
        revalidar()
        return ManejadorRespuesta.ok();
    } catch (e) {
        return ManejadorRespuesta.error(e.message)
    }
}


