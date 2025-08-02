import Fetcher from "@/infraestructura/Fetcher";

export async function obtenerJuegosStock(token, consola, tipoCliente = "customer") {
    const fetchParams = {
        method: 'GET',
        next: {
            revalidate: 60
        },
        headers: {
            Cookie: `access-token=${token}`,
        },
    }
    return Fetcher.request(`/juegos/stock?consola=${consola}&cliente=${tipoCliente}`, fetchParams)
}

export async function recargarJuegosStock (consola = undefined) {
    const fetchParams = {
        method: 'GET',
        cache: "no-store",
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