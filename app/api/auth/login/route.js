import container from "@/dominio/container";
import {NextResponse} from "next/server";
import CookieManager from "@/dominio/utils/auth/cookiesManager";
import {cookies} from "next/headers";

export async function POST(req, res) {
    const cookieStore = await cookies()
    const body = await req.json();
    const modeloUsuario = container.resolve("ModeloUsuario");
    try {
        const usuario = await modeloUsuario.obtenerPorCorreo(body.email);
        if (usuario == null) {
            return {exito: false, mensaje: "No se encontró un usuario con esos datos."}
        } else {
            const {token, name} = CookieManager.setAndGetToken(usuario)
            cookieStore.set(name, token, CookieManager.getDefaultCookieConfig())
            return NextResponse.json({ mensaje: "Login exitoso", exito: true });
        }
        // if (resultado.exito) {
        //     return NextResponse.json({exito: resultado.exito, mensaje: "Registrado en BD correctamente."})
        // }

    } catch (e) {
       console.error(e)
        return NextResponse.json({exito: false, mensaje: "No se pudo registrar en BD"})
    }
}