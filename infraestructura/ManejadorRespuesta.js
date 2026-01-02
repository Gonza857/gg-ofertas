import {NextResponse} from "next/server";

class ManejadorRespuesta {
    static NOT_AUTHORIZED = NextResponse.json({exito: false, mensaje: "No autorizado", status: 401})
    static CUSTOMER = {exito: true, usuario: null}
    static RESELLER = {exito: true, usuario: null}

    static notAuthorized() {

    }

    static notFound() {

    }

    static error(m) {
        return NextResponse.json(
            {
                mensaje: m,
                exito: false,
            },
            {status: 500}
        )
    }

    static ok(data, mensaje = undefined) {
        return NextResponse.json(
            {
                exito: true,
                data: data,
                mensaje
            }
        )
    }

    static creado(mensaje, data = {}) {
        return NextResponse.json(
            {
                exito: true,
                mensaje,
                data: {...data}
            },
            {status: 201}
        )
    }
}

export default ManejadorRespuesta;