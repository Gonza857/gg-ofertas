import Autenticador from "@/dominio/utils/auth/autenticador";
import Fetcher from "@/infraestructura/Fetcher";

export const registrarUsuario = async ({email, contrasena}) => {
    const registroAuth = await registrarUsuarioAuth(email, contrasena);
    if (!registroAuth.exito) return registroAuth;

    const registroDbResult = await registrarUsuarioDb(email)
    if (!registroDbResult.exito) return registroDbResult;

    return {exito: true, mensaje: "Registrado correctamante."}
}

export const loguearUsuario = async ({email, contrasena}) => {
    const loginAuthResult = await logueoUsuarioAuth(email, contrasena);
    if (!loginAuthResult.exito) return loginAuthResult;

    const loguearUsuarioServidorResult = await loguearUsuarioServidor(email)
    if (!loguearUsuarioServidorResult.exito) return loguearUsuarioServidorResult;

    return {exito: true, mensaje: "Logueado correctamante."}
}

const registrarUsuarioDb = async (email) => {
    const fetchParams = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({email}),
    };

    const resultado = await Fetcher.request("/auth/signin", fetchParams)

    if (!resultado.exito) {
        return {exito: false, mensaje: "No se pudo guardar en la base de datos."}
    }
    return {exito: resultado.exito, mensaje: "Usuario registrado en la base de datos."};
}

const loguearUsuarioServidor = async (email) => {
    const fetchParams = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({email}),
    };

    const resultado = await Fetcher.request("/auth/login", fetchParams)
    console.log("resultado del server", resultado)

    if (!resultado.exito) {
        return {exito: false, mensaje: "No se pudo loguear en el servidor."}
    }
    return {exito: resultado.exito, mensaje: "Usuario logueado en el servidor."};
}

const logueoUsuarioAuth = async (email, contrasena) => {
    const autenticador = new Autenticador();
    const resultado = await autenticador.iniciarSesion(email, contrasena);
    if (resultado.error) {
        return {
            exito: false,
            mensaje: "No se pudo loguear."
        }
    } else {
        return {
            exito: true,
            mensaje: "Logueado correctamente."
        }
    }
}

const registrarUsuarioAuth = async (email, contrasena) => {
    const autenticador = new Autenticador();
    const resultado = await autenticador.crearUsuario(email, contrasena);
    if (resultado.error) {
        return {
            exito: false,
            mensaje: "No se pudo registrar."
        }
    } else {
        return {
            exito: true,
            mensaje: "Registrado correctamente."
        }
    }
}