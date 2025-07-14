import Fetcher from "@/infraestructura/Fetcher";

export async function obtenerJuegosOferta
(
    tipoCliente = "customer",
    token,
    todas = false,
    nro = 1
) {
    const fetchParams = {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            Cookie: `access-token=${token}`,
        },
    }
    const params = new URLSearchParams({
        cliente: tipoCliente,
        todas: String(todas),
        nro: nro,
    })
    return Fetcher.requestNew(`/juegos/ofertas`, fetchParams, params)
}

export async function obtenerJuegosOfertaPorEstado
(
    tipoCliente = "customer",
    token,
    activa = true
) {
    const fetchParams = {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            Cookie: `access-token=${token}`,
        },
    }

    const params = new URLSearchParams({
        cliente: tipoCliente,
        estaActiva: String(activa),
    })

    const url = `/juegos/ofertas?${params.toString()}`
    return Fetcher.request(url, fetchParams)
}

export async function actualizarEstadoOferta(id, estado = true) {
    const fetchParams = {
        method: 'PATCH',
        body: JSON.stringify({estaActiva: estado}),
    }
    return Fetcher.requestNew(`/juegos/ofertas/${id}`, fetchParams)
}

export async function actualizarPrioridadOferta (id, prioridad = 1) {
    const fetchParams = {
        method: 'PATCH',
        body: JSON.stringify({prioridad: prioridad}),
    }
    return Fetcher.requestNew(`/juegos/ofertas/${id}`, fetchParams)
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

export async function subirOferta(nuevaOferta) {
    const fetchParams = {
        method: 'POST',
        body: JSON.stringify(nuevaOferta),
    };
    return Fetcher.requestNew(`/juegos/ofertas`, fetchParams);
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



