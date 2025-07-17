import container from "@/dominio/container";
import {NextResponse} from "next/server";

export async function POST(req, res) {
    const body = await req.json();
    const modeloUsuario = container.resolve("ModeloUsuario");
    try {
        const resultado = await modeloUsuario.guardar(body.email);
        if (resultado.exito) {
            return NextResponse.json({exito: resultado.exito, mensaje: "Registrado en BD correctamente."})
        }

    } catch (e) {
        console.error(e)
        return NextResponse.json({exito: false, mensaje: "No se pudo registrar en BD"})
    }
}