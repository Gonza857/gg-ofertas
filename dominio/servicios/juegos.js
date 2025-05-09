import Fetcher from "@/infraestructura/Fetcher";

export async function obtenerJuegosOferta(tipoCliente = "customer", token, todas = false) {
    const fetchParams = {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            Cookie: `access-token=${token}`,
        },
    }
    return Fetcher.request(`/juegos/ofertas?cliente=${tipoCliente}&todas=${todas}`, fetchParams)
}

export async function obtenerJuegosOfertaCliente(tipoCliente = "customer", todas = false) {
    const fetchParams = {
        method: 'GET',
        cache: 'no-cache',
    }
    return Fetcher.request(`/juegos/ofertas?cliente=${tipoCliente}&todas=${todas}`, fetchParams)
}

export async function obtenerOfertaPorId(token, id) {
    const fetchParams = {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            Cookie: `access-token=${token}`,
        },
    }
    return Fetcher.request(`/juegos/ofertas/${id}`, fetchParams)
}

export async function subirOfertas(nuevaOferta, token) {
    const fetchParams = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Cookie: `access-token=${token}`,
        },
        body: JSON.stringify(nuevaOferta),
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

export async function actualizarOfertasNavegador(ofertasObject) {
    const fetchParams = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(ofertasObject),
    };
    return Fetcher.request(`/juegos/ofertas`, fetchParams);
}

export async function eliminarJuegoOfertaNavegador(idJuego, idOferta) {
    const fetchParams = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({idOferta, idJuego}),
    };
    return Fetcher.request(`/juegos/ofertas`, fetchParams);
}



