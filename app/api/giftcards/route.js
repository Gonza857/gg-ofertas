import container from "@/dominio/container";
import {revalidatePath} from "next/cache";
import {NextResponse} from "next/server";
import CookieManager from "@/dominio/utils/auth/cookiesManager";
import {cookies} from "next/headers";
import ManejadorRespuesta from "@/infraestructura/ManejadorRespuesta";

const modeloTarjetas = container.resolve("ModeloTarjeta");
const modeloUsuario = container.resolve("ModeloUsuario");

const revalidar = () => {
    revalidatePath("/tarjetas-de-regalo", "page")
    revalidatePath("/reventa/tarjetas-de-regalo", "page")
    revalidatePath("/admin/giftcards", "page")
}

const convertirFormData_a_Object = (formData) => {
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    return formObject
}

const validarAdmin = async () => {
    const sessionUser = CookieManager.get(cookies(), "access-token")
    if (!sessionUser) return ManejadorRespuesta.CUSTOMER
    const usuario = await modeloUsuario.obtenerPorCorreo(sessionUser.email)
    if (!usuario) return ManejadorRespuesta.NOT_AUTHORIZED
    return {exito: true, usuario}
}

export async function GET(req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;

    const {searchParams} = new URL(req.url);
    let solicitante = searchParams.get('cliente') === "undefined" ? undefined : searchParams.get('cliente');
    try {
        const tarjetas = await modeloTarjetas.obtenerTodas(solicitante, resultado.usuario)
        console.log(tarjetas)
        return ManejadorRespuesta.ok({data: tarjetas})
    } catch (e) {
        return ManejadorRespuesta.error(e.message);
    }
}


export async function POST(req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;

    try {
        // const cuerpo = await req.json();
        const cuerpo = await req.formData();
        const id = await modeloTarjetas.guardar(convertirFormData_a_Object(cuerpo), resultado.usuario);
        // const id = await modeloTarjetas.guardar(cuerpo, resultado.usuario);
        revalidar()
        return ManejadorRespuesta.ok({id});
    } catch (e) {
        console.error(e)
        return ManejadorRespuesta.error(e.message)
    }
}

export async function DELETE(req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;

    try {
        const {searchParams} = new URL(req.url);
        const id = searchParams.get("id")
        await modeloTarjetas.eliminar(id, resultado.usuario)
        revalidar()
        return ManejadorRespuesta.ok();
    } catch (e) {
        return ManejadorRespuesta.error(e.message)
    }
}

export async function PATCH(req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;

    try {
        const cuerpo = await req.json();
        await modeloTarjetas.actualizar(cuerpo, resultado.usuario)
        revalidar()
        return ManejadorRespuesta.ok()
    } catch (e) {
        return ManejadorRespuesta.error(e.message)
    }
}
