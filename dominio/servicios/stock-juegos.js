import Fetcher from "@/infraestructura/Fetcher";

export async function obtenerJuegosStock() {
    const fetchParams = {
        method: 'GET',
        next: {
            revalidate: 1
        }
    }
    return Fetcher.request(`/juegos/stock`, fetchParams)
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