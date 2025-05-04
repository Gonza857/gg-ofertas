import {EndpointError} from "@/dominio/errors/EndpointError";

export default class Fetcher {
    static baseUrl = process.env.NEXT_PUBLIC_API_URL && process.env.APP_MODE === "production"
        ? `https://${process.env.NEXT_PUBLIC_API_URL}/api`
        : 'http://localhost:3000/api';


    static async request(endpoint, parametros = {}) {
        try {
            console.log(`Fetch a ${this.baseUrl}${endpoint}`)
            const respuesta = await fetch(`${this.baseUrl}${endpoint}`, parametros);
            return await this.#manejarResultadoOk(respuesta);
        } catch (error) {
            throw new EndpointError("Ocurrio un error al obtener los datos. Reintenta nuevamente más tarde")
        }
    }

    static async #manejarResultadoOk(resultado) {
        if (resultado.ok) return await resultado.json();
        const errorData = await resultado.json();
        const ClaseDeError = errorMap[errorData.nombre] || Error;
        throw new ClaseDeError(errorData.mensaje);
    }

}

const errorMap = {
    // RecursosNoEncontradosError: RecursosNoEncontradosError,
    // AutenticacionError: AutenticacionError,
};
