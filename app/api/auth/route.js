// app/api/validar-admin/route.js
import { NextResponse } from 'next/server'
import container from "@/dominio/container";
import CookieManager from "@/dominio/utils/auth/cookiesManager";

const modeloUsuario = container.resolve("ModeloUsuario")

export async function POST(req) {
    const authHeader = req.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const token = authHeader.split(' ')[1]

    // TODO: Reemplazar esto con tu verificación real de token
    const usuarioPayload = await verificarTokenYObtenerUsuario(token)

    if (!usuarioPayload) {
        return NextResponse.json({ error: 'Token inválido' }, { status: 401 })
    }

    const usuario = await modeloUsuario.obtenerPorCorreo(usuarioPayload.email)
    if (!usuario) {
        return NextResponse.json({ esAdmin: false }, { status: 200 })
    }

    return NextResponse.json({ esAdmin: true })
}

// Función ficticia para verificar el token
async function verificarTokenYObtenerUsuario(token) {
    try {
        return CookieManager.verifyToken(token)
    } catch {
        return null
    }
}
