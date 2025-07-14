import {reventaPsnPlus} from "@/static-data/item.playstationplus";

class PlayStationPlusAdmin {
    static meses = {
        0: "1M",
        1: "3M",
        2: "12M"
    }

    static diccionarioTipos = {
        "essential": "bg-gray-300 text-black",
        "extra": "bg-yellow-500 text-black",
        "deluxe": "bg-gray-800 text-yellow-500"
    }


    static obtenerRegistroPorMesSegunItem (plusItem) {
        console.log("plus item para procesar", plusItem);
        const itemsProc = plusItem.precioReventa.map((precio, indice) => {
            return {
                titulo: plusItem.title,
                tipo: plusItem.tipo,
                meses: PlayStationPlusAdmin.meses[indice],
                consola: plusItem.consola,
                precio: precio,
            }
        })
        console.log("items procesados en clase", itemsProc)
        return itemsProc
    }

    static procesarMembresias (membresias) {
        const itemsSeparados = membresias.map((sub) => PlayStationPlusAdmin.obtenerRegistroPorMesSegunItem(sub))
        const itemsLimpios = []
        itemsSeparados.forEach(m => m.forEach(n => itemsLimpios.push(n)))
        return itemsLimpios;
    }

}

export default PlayStationPlusAdmin