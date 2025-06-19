import Fetcher from "@/infraestructura/Fetcher";

export async function obtenerTodasLasTarjetas(tipoCliente = "customer", token) {
    console.log("token que mando al back", token)
    const fetchParams = {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            Cookie: `access-token=${token}`,
        },
    }
    return Fetcher.request(`/giftcards?cliente=${tipoCliente}`, fetchParams)
}

export async function actualizarTarjeta(tarjetaActualizada) {
    const fetchParams = {
        method: 'PATCH',
        body: JSON.stringify(tarjetaActualizada),
    }
    return Fetcher.request(`/giftcards`, fetchParams)
}

export async function eliminarTarjeta(id) {
    const fetchParams = {
        method: 'DELETE',
        body: JSON.stringify({id}),
    }
    return Fetcher.request(`/giftcards`, fetchParams)
}

export async function agregarTarjeta(nuevaTarjeta) {
    const fetchParams = {
        method: 'POST',
        body: nuevaTarjeta,
    }
    return Fetcher.request(`/giftcards`, fetchParams)
}