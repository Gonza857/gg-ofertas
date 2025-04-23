import {NextResponse} from "next/server";
import container from "@/dominio/container";
import {revalidatePath} from "next/cache";

const modeloJuegos = container.resolve("ModeloJuegos");

export async function GET(req, res) {
    try {
        const juegos = await modeloJuegos.obtenerJuegosOfertaReventa();
        revalidar()
        return NextResponse.json(juegos)
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
        const resultado = await modeloJuegos.subirOfertas(cuerpo);
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

const revalidar = () => {
    revalidatePath("/reventa")
    revalidatePath("/")
}
