import {NextResponse} from "next/server";
import container from "@/dominio/container";
import {revalidatePath} from "next/cache";
import {cookies} from "next/headers";
import CookieManager from "@/dominio/utils/auth/cookiesManager";
import ManejadorRespuesta from "@/infraestructura/ManejadorRespuesta";

const modeloJuegos = container.resolve("ModeloJuegos");
const modeloUsuario = container.resolve("ModeloUsuario");

const revalidar = () => {
    revalidatePath("/reventa/juegos/stock", "page")
    revalidatePath("/juegos/stock/ps4", "page")
    revalidatePath("/juegos/stock/ps5", "page")
    revalidatePath("/admin/stock/juegos", "page")
}

const NOT_AUTHORIZED = NextResponse.json({exito: false, mensaje: "No autorizado", status: 401})
const CUSTOMER = {exito: true, usuario: null}
const ERROR = (m) => (NextResponse.json({mensaje: m, exito: false,}))
const SUCCESS = (data) => (NextResponse.json({exito: true, ...data}))

const validarAdmin = async () => {
    const sessionUser = CookieManager.get(cookies(), "access-token")
    if (!sessionUser) return CUSTOMER
    const usuario = await modeloUsuario.obtenerPorCorreo(sessionUser.email)
    if (!usuario) return NOT_AUTHORIZED
    return {exito: true, usuario}
}

export async function GET(req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;

    const { searchParams } = new URL(req.url);
    let consolaBuscada = searchParams.get('consola') === "undefined" ? undefined : searchParams.get('consola');

    try {
        const juegos = await modeloJuegos.obtenerJuegosStock(consolaBuscada, resultado.usuario)
        return ManejadorRespuesta.ok({data: juegos})
    } catch (e) {
        return ManejadorRespuesta.error(e.message);
    }
}

export async function POST(req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;

    try {
        const cuerpo = await req.json();
        const resultado = await modeloJuegos.guardarJuegoStock(cuerpo);
        revalidar()
        return NextResponse.json(
            resultado
        )
    } catch (e) {
        return ERROR(e.message)
    }
}

export async function DELETE(req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;

    try {
        const {searchParams} = new URL(req.url);
        const id = searchParams.get("id")
        const resultado = await modeloJuegos.eliminarJuegoStock(id)
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
        const resultado = await modeloJuegos.actualizarJuegoStock(cuerpo)
        revalidar()
        return ManejadorRespuesta.ok({data: resultado})
    } catch (e) {
        return ManejadorRespuesta.error(e.message);
    }
}