import Fetcher from "@/infraestructura/Fetcher";
import {PlaystationplusMapper} from "@/front/entities/playstationplus/playstationplus.mapper";

export async function subirPlaystationplus(plus) {
    const fetchParams = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(plus),
    };
    return Fetcher.request(`/playstationplus`, fetchParams);
}

export async function actualizarPlus(plus) {
    const fetchParams = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(plus),
    };
    return Fetcher.request(`/playstationplus`, fetchParams);
}

export async function eliminarPlus(id) {
    const fetchParams = {
        method: 'DELETE',
    };
    return Fetcher.request(`/playstationplus?id=${id}`, fetchParams);
}

export async function obtenerPlusStock(rol = "customer") {
    console.log("PIDO PLUS STOCK PARA ROL", rol)
    const fetchParams = {
        method: 'GET',
        cache: "no-store"
    };
    const response = await Fetcher.request(`/playstationplus?cliente=${rol}`, fetchParams);
    // if (rol === "admin") {
    //     console.log("largo de respuesta", response.data.length)
    //     return {
    //         exito: response.exito,
    //         data: PlaystationplusMapper.mapListToEntities(response.data)
    //     }
    // }
    return response

}