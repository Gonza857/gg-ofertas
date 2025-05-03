import {NextResponse} from "next/server";

class ManejadorRespuesta {
    static NOT_AUTHORIZED = NextResponse.json({exito: false, mensaje: "No autorizado", status: 401})
    static CUSTOMER = {exito: true, usuario: null}

    static notAuthorized() {

    }

    static notFound() {

    }

    static error(m) {
        return NextResponse.json({mensaje: m, exito: false,})
    }

    static ok(data) {
        return NextResponse.json({exito: true, ...data})
    }
}

export default ManejadorRespuesta;