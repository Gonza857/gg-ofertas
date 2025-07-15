import CookieManager from "@/dominio/utils/auth/cookiesManager";
import {cookies} from "next/headers";
import ManejadorRespuesta from "@/infraestructura/ManejadorRespuesta";
import container from "@/dominio/container";
import {postPreventa} from "@/app/schemas/backend/preventas";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

const modeloUsuario = container.resolve("ModeloUsuario");
const modeloJuego = container.resolve("ModeloJuegos");

const validarAdmin = async () => {
    const sessionUser = CookieManager.get(cookies(), "access-token");
    if (!sessionUser) return ManejadorRespuesta.CUSTOMER
    const usuario = await modeloUsuario.obtenerPorCorreo(sessionUser.email)
    if (!usuario) return ManejadorRespuesta.NOT_AUTHORIZED
    return {exito: true, usuario}
}

export async function POST (req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;

    const body = await req.json();

    let preventa;
    try {
        preventa = postPreventa.parse(body)
    } catch (error) {
        console.log(error)
        return ManejadorRespuesta.error(error.message)
    }

    try {
        await modeloJuego.crearPreventa(preventa)
        revalidatePath("/admin/juegos/preventas")
        return ManejadorRespuesta.creado("Preventa creada", preventa)
    } catch (e) {
        console.log("Error al crear preventa")
        return ManejadorRespuesta.error(e)
    }

}

export async function GET (req, res) {
    try {
        const preventas = await modeloJuego.obtenerPreventas()
        console.log("preventas obtenidas back", preventas)
        return ManejadorRespuesta.ok(preventas)
    } catch (e) {
        console.log("Error al obtener preventas", e)
        return ManejadorRespuesta.error(e)
    }
}