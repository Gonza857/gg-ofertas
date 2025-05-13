import {revalidatePath} from "next/cache";
import {NextResponse} from "next/server";
import container from "@/dominio/container";
import ManejadorRespuesta from "@/infraestructura/ManejadorRespuesta";

const modeloPlus = container.resolve("ModeloPlus");
const validadorRol = container.resolve("ValidadorRol");

console.log("modeloPlus", modeloPlus);
console.log("validadorRol", validadorRol)

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
        const resultado = await modeloPlus.guardarSubscripcion(cuerpo, resultado.usuario);
        revalidar()
        return ManejadorRespuesta.ok({data: resultado})
    } catch (e) {
        return ManejadorRespuesta.error(e.message)
    }
}

export async function PATCH(req, res) {
    const resultado = await validadorRol.validarAdmin()
    if (!resultado.exito) return resultado;
    try {
        const cuerpo = await req.json();
        const resultado = await modeloPlus.actualizar(cuerpo, resultado.usuario);
        revalidar()
        return ManejadorRespuesta.ok({data: resultado})
    } catch (e) {
        return ManejadorRespuesta.error(e.message)
    }
}

export async function GET(req, res) {
    try {
        const resultado = await modeloPlus.obtenerSubscripcionesEnStock()
        return ManejadorRespuesta.ok({data: resultado})
    } catch (e) {
        return ManejadorRespuesta.error(e.message)
    }
}

export async function DELETE(req) {
    const resultado = await validadorRol.validarAdmin()
    if (!resultado.exito) return resultado;

    const idPlus = new URL(req.url).searchParams.get('id')
    try {
        const resultado = await modeloPlus.eliminar(idPlus, resultado.usuario);
        revalidar()
        return ManejadorRespuesta.ok({data: resultado})
    } catch (e) {
        return ManejadorRespuesta.error(e.message)
    }
}