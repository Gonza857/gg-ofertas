import container from "@/dominio/container";
import {NextResponse} from "next/server";
import {revalidatePath} from "next/cache";

const modeloJuegos = container.resolve("ModeloJuegos");

export async function POST(req, res) {
    try {
        const cuerpo = await req.json();
        const resultado = await modeloJuegos.guardarJuegoStock(cuerpo);
        revalidatePath("/reventa/juegos/stock")
        revalidatePath("//stock")
        revalidatePath("/admin/stock/juegos")
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

export async function GET(req, res) {
    try {
        const resultado = await modeloJuegos.obtenerJuegosStock()
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