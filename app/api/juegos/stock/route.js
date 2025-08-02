import {NextResponse} from "next/server";
import container from "@/dominio/container";
import {revalidatePath} from "next/cache";
import {cookies} from "next/headers";
import CookieManager from "@/dominio/utils/auth/cookiesManager";
import ManejadorRespuesta from "@/infraestructura/ManejadorRespuesta";
import {updateJuegoStock} from "@/app/schemas/backend/juegoStock";
import UrlParametersHandlers from "@/app/helpers/UrlParametersHandlers";

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

    const parametrosNecesarios = [
        "consola",
        "cliente",
    ]
    const {consolaBuscada, cliente} = UrlParametersHandlers.obtenerParametros(parametrosNecesarios, req)

    try {
        const juegos = await modeloJuegos.obtenerJuegosStock(consolaBuscada, cliente, resultado.usuario)
        return ManejadorRespuesta.ok(juegos)
    } catch (e) {
        return ManejadorRespuesta.error(e.message);
    }
}

export async function POST(req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;
    try {
        const cuerpo = await req.json();
        const juegoStockCreado = await modeloJuegos.guardarJuegoStock(cuerpo);
        revalidar()
        return ManejadorRespuesta.creado("Juego creado correctamente", juegoStockCreado)
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
    const body = await req.json();

    let juegoStock;
    try {
        juegoStock = updateJuegoStock.parse(body)
    } catch (e) {
        console.log(e)
        return ManejadorRespuesta.error(e.message)
    }

    try {
        const resultado = await modeloJuegos.actualizarJuegoStock(juegoStock)
        revalidar()
        return ManejadorRespuesta.ok(resultado)
    } catch (e) {
        return ManejadorRespuesta.error(e.message);
    }
}