import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,
    confirmPasswordReset
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const CONFIGURACION_FIREBASE = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const erroresContrasena = {
    "auth/password-does-not-meet-requirements": "La contraseña no cumple con los requisitos. Asegúrate de que tenga al menos 8 caracteres, una letra mayúscula y un número.",
    "auth/weak-password": "La contraseña es demasiado débil. Intenta con una contraseña más segura.",
    "auth/missing-password": "La contraseña es obligatoria.",
    "auth/wrong-password": "La contraseña que ingresaste es incorrecta.",
    "auth/requires-recent-login": "Necesitas iniciar sesión nuevamente para cambiar la contraseña por razones de seguridad.",
};

export default class Autenticador {

    AUTENTICADOR;

    constructor() {
        this.AUTENTICADOR = getAuth(initializeApp(CONFIGURACION_FIREBASE));
    }

    async crearUsuario(email, contrasena) {
        try {
            const credencial = await createUserWithEmailAndPassword(this.AUTENTICADOR, email, contrasena)
            return credencial.user;
        } catch (e) {
            console.error(e)
            return {
                error: true,
                mensaje: "No se pudo crear el usuario. Error A1."
            }
        }
    }

    async iniciarSesion(email, contrasena) {
        try {
            const credencial = await signInWithEmailAndPassword(this.AUTENTICADOR, email, contrasena);
            return credencial.user;
        } catch (e) {
            console.log(e)
            return {
                error: true,
                mensaje: "No se pudo loguear el usuario. Error A2."
            }
            // throw new Error(this.#traducirErrorFirebase(e.code))
        }
    }

    async cambiarContrasena (contrasenaNueva, oobCode) {
        try {
            await confirmPasswordReset(this.AUTENTICADOR, oobCode, contrasenaNueva)
            return {
                exito: 1,
                mensaje: "Contraseña actualizada correctamente"
            }
        } catch (e) {
            console.error(e.message)
            return {
                exito: 0,
                mensaje: erroresContrasena[e.code]
            }
        }
    }

    async enviarCorreoDeRecuperacion (email) {
        try {
            await sendPasswordResetEmail(this.AUTENTICADOR, email)
            return {
                exito: true,
                mensaje: "Correo electrónico de recuperación enviado."
            }
        } catch (e) {
            return {
                exito: false,
                mensaje: "Ocurrio un error al enviar el correo de recuperación."
            }
        }
    }

    async cerrarSesion() {
        await signOut(this.AUTENTICADOR);
    }



    #traducirErrorFirebase(codigoError) {
        switch (codigoError) {
            case "auth/invalid-credential":
                return "Los datos son incorrectos.";
            case "auth/invalid-email":
                return "El correo electrónico no es válido.";
            case "auth/user-disabled":
                return "Este usuario ha sido deshabilitado.";
            case "auth/user-not-found":
                return "Los datos son incorrectos.";
            case "auth/wrong-password":
                return "Los datos son incorrectos.";
            case "auth/too-many-requests":
                return "Demasiados intentos fallidos. Intenta más tarde.";
            case "auth/network-request-failed":
                return "Error de conexión. Verifica tu internet.";
            default:
                return "Ocurrió un error inesperado. Intenta nuevamente.";
        }
    }

    obtenerUsuarioActual() {
        return new Promise((resolve, reject) => {
            const unsubscribe = onAuthStateChanged(
                this.AUTENTICADOR,
                (usuario) => {
                    unsubscribe(); // Detenemos el listener después de obtener el usuario
                    resolve(usuario); // Resolvemos la promesa con el usuario
                },
                (error) => {
                    reject(error); // Rechazamos la promesa en caso de error
                }
            );
        });
    }
}