import container from "@/dominio/container";
import {NextResponse} from "next/server";
import {revalidatePath} from "next/cache";

const modeloJuegos = container.resolve("ModeloJuegos");

export async function POST(req, res) {
    try {
        const cuerpo = await req.json();
        const resultado = await modeloJuegos.guardarJuegoStock(cuerpo);
        revalidatePath("/reventa/juegos/stock")
        revalidatePath("/juegos/stock/ps4")
        revalidatePath("/juegos/stock/ps5")
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
    const { searchParams } = new URL(req.url);
    let c = searchParams.get('consola');
    try {
        const resultado = await modeloJuegos.obtenerJuegosStock(c)
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