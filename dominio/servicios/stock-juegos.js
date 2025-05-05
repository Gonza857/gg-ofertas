import Fetcher from "@/infraestructura/Fetcher";

export async function obtenerJuegosStock(token, consola) {
    const fetchParams = {
        method: 'GET',
        cache: "no-store",
        headers: {
            Cookie: `access-token=${token}`,
        },
    }
    return Fetcher.request(`/juegos/stock?consola=${consola}`, fetchParams)
}

export async function guardarJuegoStock(juego) {
    const fetchParams = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(juego),
    };
    return Fetcher.request(`/juegos/stock`, fetchParams);
}

export async function actualizarJuegoStock(juego) {
    const fetchParams = {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(juego),
    };
    return Fetcher.request(`/juegos/stock`, fetchParams);
}

export async function eliminarJuegoStock(id) {
    const fetchParams = {
        method: 'DELETE',
    };
    return Fetcher.request(`/juegos/stock?id=${id}`, fetchParams);
}