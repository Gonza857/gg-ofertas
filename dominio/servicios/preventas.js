import Fetcher from "@/infraestructura/Fetcher";

export async function crearPreventa(preventa) {
    const fetchParams = {
        method: 'POST',
        body: JSON.stringify(preventa),
    };
    return Fetcher.requestNew(`/juegos/preventa`, fetchParams);
}

export async function actualizarPreventa(preventa, id) {
    const fetchParams = {
        method: 'PATCH',
        body: JSON.stringify(preventa),
    };
    return Fetcher.requestNew(`/juegos/preventa/${id}`, fetchParams);
}

export async function obtenerPreventaPorId(token, id) {
    const fetchParams = {
        method: 'GET',
        headers: {
            Cookie: `access-token=${token}`,
        },
    };
    return Fetcher.requestNew(`/juegos/preventa/${id}`, fetchParams);
}

export async function obtenerPreventas(token) {
    const fetchParams = {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            Cookie: `access-token=${token}`,
        },
    };
    return Fetcher.requestNew(`/juegos/preventa`, fetchParams);
}
