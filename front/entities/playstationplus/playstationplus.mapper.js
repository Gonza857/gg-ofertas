import {Playstationplus} from "@/front/entities/playstationplus/playstationplus.entity";

export class PlaystationplusMapper {
    static mapToEntity (response) {
        return new Playstationplus(
            response.id,
            response.slotsPs4,
            response.slotsPs5,
            response.codigo,
            response.estado,
            response.costo,
            response.duracion,
            response.creado,
            response.tipo,
            response.diasRestantes
        )
    }

    static mapListToEntities (responseList) {
        return responseList.map(r => PlaystationplusMapper.mapToEntity(r))
    }
}