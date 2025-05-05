import {revalidatePath} from "next/cache";
import {NextResponse} from "next/server";
import container from "@/dominio/container";

const modeloPlus = container.resolve("ModeloPlus");

export async function POST(req, res) {
    try {
        const cuerpo = await req.json();
        const resultado = await modeloPlus.guardarSubscripcion(cuerpo);
        // revalidatePath("/reventa/oferta-juegos")
        // revalidatePath("/")
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
        const resultado = await modeloPlus.actualizar(cuerpo);
        // revalidatePath("/reventa/oferta-juegos")
        // revalidatePath("/")
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
        const resultado = await modeloPlus.obtenerSubscripcionesEnStock()
        console.log("Subs", resultado)
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

export async function DELETE(req) {
    const idPlus = new URL(req.url).searchParams.get('id')
    try {
        const resultado = await modeloPlus.eliminar(idPlus);
        // revalidatePath("/carrito")
        // revalidatePath("/")
        // revalidatePath("/pedido")
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