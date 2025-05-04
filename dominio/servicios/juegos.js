import Fetcher from "@/infraestructura/Fetcher";

export async function obtenerJuegosOferta(tipoCliente = "customer", token) {
    const fetchParams = {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            Cookie: `access-token=${token}`,
        },
    }
    return Fetcher.request(`/juegos/ofertas?cliente=${tipoCliente}`, fetchParams)
}

export async function subirOfertas(ofertas, token) {
    const fetchParams = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Cookie: `access-token=${token}`,
        },
        body: JSON.stringify(ofertas),
    };
    return Fetcher.request(`/juegos/ofertas`, fetchParams);
}
export async function actualizarOfertas(ofertasObject, token) {
    const fetchParams = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            Cookie: `access-token=${token}`,
        },
        body: JSON.stringify(ofertasObject),
    };
    return Fetcher.request(`/juegos/ofertas`, fetchParams);
}



