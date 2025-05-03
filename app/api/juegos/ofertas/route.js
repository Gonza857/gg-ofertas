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
    console.log("usuario", resultado)
    if (!resultado.exito) return resultado;

    const {searchParams} = new URL(req.url);
    const valor = searchParams.get("cliente");
    const tipoCliente = valor === "undefined" ? undefined : valor;

    try {
        const oferta = await modeloJuegos.obtenerJuegosOferta(tipoCliente, resultado.usuario);
        return ManejadorRespuesta.ok(oferta)
    } catch (e) {
        return ManejadorRespuesta.error(e.message)
    }
}

export async function POST(req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;

    try {
        const cuerpo = await req.json();
        const resultado = await modeloJuegos.subirOfertas(cuerpo);
        revalidar()
        return NextResponse.json(
            resultado
        )
    } catch (e) {
        return NextResponse.json({
                mensaje: e.message,
                exito: false,
            }
        )
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
        return ManejadorRespuesta.error(e.message)
    }
}


