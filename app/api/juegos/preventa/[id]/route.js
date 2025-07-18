import container from "@/dominio/container";
import ManejadorRespuesta from "@/infraestructura/ManejadorRespuesta";
import CookieManager from "@/dominio/utils/auth/cookiesManager";
import {cookies} from "next/headers";
import {patchPreventa} from "@/app/schemas/backend/preventas";
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

export async function GET (req, res) {
    const id = res.params.id;
    try {
        const preventa = await modeloJuego.obtenerPreventaPorId(id)
        return ManejadorRespuesta.ok(preventa)
    } catch (e) {
        return ManejadorRespuesta.error(e)
    }
}

export async function DELETE (req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;

    const id = res.params.id;

    try {
        await modeloJuego.eliminarPreventa(id);
        revalidatePath(`/admin/juegos/preventas/${id}`, "page")
        revalidatePath("/admin/juegos/preventas", "page")
        revalidatePath("/juegos/preventas", "page")
        revalidatePath("/reventa/juegos/preventas", "page")
        return ManejadorRespuesta.ok();
    } catch (e) {
        return ManejadorRespuesta.error(e.message)
    }
}

export async function PATCH (req, res) {
    const resultado = await validarAdmin();
    if (!resultado.exito) return resultado;

    const id = res.params.id;

    const body = await req.formData();
    const formValues = convertirFormData_a_Object(body)

    let resultadoValidarPreventa = patchPreventa.safeParse(formValues);
    if (resultadoValidarPreventa.error) {
        return ManejadorRespuesta.error(resultadoValidarPreventa.error)
    }

    try {
        await modeloJuego.actualizarPreventa(resultadoValidarPreventa.data, id)
        revalidatePath(`/admin/juegos/preventas/${id}`, "page")
        revalidatePath("/admin/juegos/preventas", "page")
        revalidatePath("/juegos/preventas", "page")
        revalidatePath("/reventa/juegos/preventas", "page")
        return ManejadorRespuesta.creado("Preventa actualizada", resultadoValidarPreventa.data)
    } catch (e) {
        console.log("Error al actualizar preventa", e)
        return ManejadorRespuesta.error(e)
    }
}