import {revalidatePath} from "next/cache";
import {NextResponse} from "next/server";
import container from "@/dominio/container";
import ManejadorRespuesta from "@/infraestructura/ManejadorRespuesta";

const modeloPlus = container.resolve("ModeloPlus");
const validadorRol = container.resolve("ValidadorRol");


const revalidar = () => {
    revalidatePath("/playstationplus", "page")
    revalidatePath("/reventa/playstationplus", "page")
    revalidatePath("/reventa/playstationplus-liquidacion", "page")
    revalidatePath("/admin/playstationplus", "page")
    revalidatePath("/admin/playstationplus/liquidacion", "page")
}

export async function POST(req, res) {
    const resultado = await validadorRol.validarAdmin()
    if (!resultado.exito) return resultado;
    try {
        const cuerpo = await req.json();
        const resultadoGuardar = await modeloPlus.guardarSubscripcion(cuerpo, resultado.usuario);
        revalidar()
        return ManejadorRespuesta.ok({data: resultadoGuardar})
    } catch (e) {
        return ManejadorRespuesta.error(e.message)
    }
}

export async function PATCH(req, res) {
    const resultado = await validadorRol.validarAdmin()
    if (!resultado.exito) return resultado;
    try {
        const cuerpo = await req.json();
        const resultadoActualizar = await modeloPlus.actualizar(cuerpo, resultado.usuario);
        revalidar()
        return ManejadorRespuesta.ok({data: resultadoActualizar})
    } catch (e) {
        return ManejadorRespuesta.error(e.message)
    }
}

export async function GET(req, res) {
    const { searchParams } = new URL(req.url);
    let cliente = searchParams.get('cliente') === "undefined" ? undefined : searchParams.get('cliente');

    try {
        const resultadoObtener = await modeloPlus.obtenerSubscripcionesEnStock(cliente)
        return ManejadorRespuesta.ok(resultadoObtener)
    } catch (e) {
        console.error(e.message)
        return ManejadorRespuesta.error(e.message)
    }
}

export async function DELETE(req) {
    const resultado = await validadorRol.validarAdmin()
    if (!resultado.exito) return resultado;

    const idPlus = new URL(req.url).searchParams.get('id')
    try {
        const resultadoEliminar = await modeloPlus.eliminar(idPlus, resultado.usuario);
        revalidar()
        return ManejadorRespuesta.ok({data: resultadoEliminar})
    } catch (e) {
        return ManejadorRespuesta.error(e.message)
    }
}