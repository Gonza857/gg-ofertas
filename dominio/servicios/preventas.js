import Fetcher from "@/infraestructura/Fetcher";

export async function crearPreventa(preventa) {
    const fetchParams = {
        method: 'POST',
        body: preventa,
    };
    return Fetcher.requestNew(`/juegos/preventa`, fetchParams);
}

export async function eliminarPreventa(id) {
    const fetchParams = {
        method: 'DELETE',
    };
    return Fetcher.requestNew(`/juegos/preventa/${id}`, fetchParams);
}

export async function actualizarPreventa(preventa, id) {
    const fetchParams = {
        method: 'PATCH',
        body: preventa,
    };
    return Fetcher.requestNew(`/juegos/preventa/${id}`, fetchParams);
}

export async function obtenerPreventaPorId(token, id) {
    const fetchParams = {
        method: 'GET',
        next: {
            revalidate: 60
        },
        headers: {
            Cookie: `access-token=${token}`,
        },
    };
    return Fetcher.requestNew(`/juegos/preventa/${id}`, fetchParams);
}

export async function obtenerPreventas(cliente = "customer", token) {
    const fetchParams = {
        method: 'GET',
        next: {
            revalidate: 60
        },
        headers: {
            Cookie: `access-token=${token}`,
        },
    };

    const params = new URLSearchParams({
        cliente: cliente,
    })

    return Fetcher.requestNew(`/juegos/preventa`, fetchParams, params);
}
