import Fetcher from "@/infraestructura/Fetcher";

export async function subirJuegoEnStock(juego) {
    const fetchParams = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(juego),
    };
    return Fetcher.request(`/admin/stock/juego`, fetchParams);
}