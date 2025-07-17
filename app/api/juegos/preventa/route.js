import CookieManager from "@/dominio/utils/auth/cookiesManager";
import {cookies} from "next/headers";
import ManejadorRespuesta from "@/infraestructura/ManejadorRespuesta";
import container from "@/dominio/container";
import {getPreventas, postPreventa} from "@/app/schemas/backend/preventas";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import UrlParametersHandlers from "@/app/helpers/UrlParametersHandlers";
import {juegosOferta} from "@/app/schemas/backend/ofertas";

const modeloUsuario = container.resolve("ModeloUsuario");
const modeloJuego = container.resolve("ModeloJuegos");

const convertirFormData_a_Object = (formData) => {
    const formObject = {};

    for (let [key, value] of formData.entries()) {
        // Si la clave ya existe (por ejemplo en inputs repetidos), agrupamos en array
        if (formObject[key]) {
            if (Array.isArray(formObject[key])) {
                formObject[key].push(value);
            } else {
                formObject[key] = [formObject[key], value];
            }
        } else {
            formObject[key] = value;
        }
    }

    return formObject;
};

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

    const body = await req.formData();
    const formValues = convertirFormData_a_Object(body)

    let preventa;
    try {
        preventa = postPreventa.parse(formValues)
    } catch (error) {
        console.log(error)
        return ManejadorRespuesta.error(error.message)
    }

    try {
        await modeloJuego.crearPreventa(preventa)
        revalidatePath("/admin/juegos/preventas")
        return ManejadorRespuesta.creado("Preventa creada", preventa)
    } catch (e) {
        console.log("Error al crear preventa", e)
        return ManejadorRespuesta.error(e)
    }

}

export async function GET (req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;

    const parametrosNecesarios = [
        "cliente"
    ]
    const parametros = UrlParametersHandlers.obtenerParametros(parametrosNecesarios, req)

    const {cliente} = getPreventas.parse(parametros)

    try {
        const preventas = await modeloJuego.obtenerPreventas(cliente, resultado.usuario)
        return ManejadorRespuesta.ok(preventas)
    } catch (e) {
        console.log("Error al obtener preventas", e)
        return ManejadorRespuesta.error(e)
    }
}