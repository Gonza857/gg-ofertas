import {NextResponse} from "next/server";
import container from "@/dominio/container";
import {revalidatePath} from "next/cache";
import {cookies} from "next/headers";
import ManejadorRespuesta from "@/infraestructura/ManejadorRespuesta";
import CookieManager from "@/dominio/utils/auth/cookiesManager";

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

    const {searchParams} = new URL(req.url);
    const valor = searchParams.get("cliente");
    const tipoCliente = valor === "undefined" ? undefined : valor;

    const todas = searchParams.get("todas");
    const quiereTodas = todas === "undefined" ? undefined : todas;

    const nro = searchParams.get("nro");
    const nroOferta = nro === "undefined" ? undefined : nro;

    try {
        const ofertas = await modeloJuegos.obtenerJuegosOferta(tipoCliente, resultado.usuario, quiereTodas, nroOferta);
        return ManejadorRespuesta.ok({data: ofertas})
    } catch (e) {
        return ManejadorRespuesta.error(e.message)
    }
}

export async function POST(req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;

    try {
        const cuerpo = await req.json();
        await modeloJuegos.subirOfertas(cuerpo);
        revalidar()
        return ManejadorRespuesta.ok()
    } catch (e) {
        return ManejadorRespuesta.error(e.message)
    }
}

export async function PATCH(req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;

    try {
        const cuerpo = await req.json();
        await modeloJuegos.actualizarOfertas(cuerpo, resultado.usuario);
        revalidar()
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


