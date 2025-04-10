import {NextResponse} from "next/server";
import container from "@/dominio/container";
import {revalidatePath} from "next/cache";

const modeloJuegos = container.resolve("ModeloJuegos");

const revalidar = () => {
    revalidatePath("/stock", "page")
    revalidatePath("/reventa/juegos/stock", "page")
    revalidatePath("/admin/stock/juegos", "page")
}

export async function GET(req, res) {
    try {
        const resultado = await modeloJuegos.obtenerJuegosStock("undefined")
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

export async function POST(req, res) {
    try {
        const cuerpo = await req.json();
        const resultado = await modeloJuegos.guardarJuegoStock(cuerpo);
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

export async function DELETE(req, res) {
    try {
        const { searchParams } = new URL(req.url);
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
    try {
        const cuerpo = await req.json();
        const resultado = await modeloJuegos.actualizarJuegoStock(cuerpo)
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