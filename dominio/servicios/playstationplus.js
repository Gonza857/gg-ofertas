import Fetcher from "@/infraestructura/Fetcher";

export async function subirPlaystationplus(plus) {
    const fetchParams = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(plus),
    };
    return Fetcher.request(`/admin/stock/playstationplus`, fetchParams);
}

export async function actualizarPlus(plus) {
    const fetchParams = {
        method: 'PATCH',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(plus),
    };
    return Fetcher.request(`/admin/stock/playstationplus`, fetchParams);
}

export async function eliminarPlus(id) {
    const fetchParams = {
        method: 'DELETE',
    };
    return Fetcher.request(`/admin/stock/playstationplus?id=${id}`, fetchParams);
}

export async function obtenerPlusStock() {
    const fetchParams = {
        method: 'GET',
        cache: "no-store"
    };
    return Fetcher.request(`/admin/stock/playstationplus`, fetchParams);
}