import Fetcher from "@/infraestructura/Fetcher";

export async function obtenerJuegosOferta() {
    const fetchParams = {
        method: 'GET',
        next: {
            revalidate: 60
        }
    }
    return Fetcher.request(`/juegos/ofertas`, fetchParams)
}

export async function subirOfertas(ofertas) {
    const fetchParams = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(ofertas),
    };
    return Fetcher.request(`/juegos/ofertas`, fetchParams);
}



export async function obtenerJuegosStock() {
    const fetchParams = {
        method: 'GET',
        cache: "no-store"
    }
    return Fetcher.request(`/admin/stock/juego`, fetchParams)
}



export async function vaciarCarrito(idUsuario) {
    const fetchParams = {
        method: 'DELETE',
    };
    return Fetcher.request(`/carrito?id=${idUsuario}`, fetchParams);
}

export async function fusionarCarrito(carritoLocalStorage, idUsuario) {
    const fetchParams = {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(carritoLocalStorage),

    };
    return Fetcher.request(`/carrito?id=${idUsuario}`, fetchParams);
}