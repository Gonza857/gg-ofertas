import container from "@/dominio/container";
import ManejadorRespuesta from "@/infraestructura/ManejadorRespuesta";
import CookieManager from "@/dominio/utils/auth/cookiesManager";
import {cookies} from "next/headers";
import {postPreventa} from "@/app/schemas/backend/preventas";
import {revalidatePath} from "next/cache";

const modeloJuego = container.resolve("ModeloJuegos");
const modeloUsuario = container.resolve("ModeloUsuario");

const validarAdmin = async () => {
    const sessionUser = CookieManager.get(cookies(), "access-token");
    if (!sessionUser) return ManejadorRespuesta.CUSTOMER
    const usuario = await modeloUsuario.obtenerPorCorreo(sessionUser.email)
    if (!usuario) return ManejadorRespuesta.NOT_AUTHORIZED
    return {exito: true, usuario}
}

export async function GET (req, res) {
    const id = res.params.id;

    try {
        const preventa = await modeloJuego.obtenerPreventaPorId(id)
        console.log("preventa obtenida back", preventa)
        return ManejadorRespuesta.ok(preventa)
    } catch (e) {
        console.log("Error al obtener preventas", e)
        return ManejadorRespuesta.error(e)
    }
}

export async function PATCH (req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;

    const body = await req.json();
    const id = res.params.id;

    let preventa;
    try {
        preventa = postPreventa.parse(body)
    } catch (error) {
        console.log(error)
        return ManejadorRespuesta.error(error.message)
    }

    try {
        await modeloJuego.actualizarPreventa(preventa, id)
        revalidatePath(`/admin/juegos/preventas/${id}`)
        return ManejadorRespuesta.creado("Preventa actualizada", preventa)
    } catch (e) {
        console.log("Error al crear preventa")
        return ManejadorRespuesta.error(e)
    }
}