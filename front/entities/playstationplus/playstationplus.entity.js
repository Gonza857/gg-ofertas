export class Playstationplus {
    id;
    slotsPs4;
    slotsPs5;
    codigo;
    estado;
    costo;
    duracion;
    creado;
    tipo;
    diasRestantes;

    constructor(
        id, slotsPs4, slotsPs5, codigo, estado, costo, duracion, creado, tipo, diasRestantes
    ) {
        this.id = id;
        this.slotsPs4 = Number(slotsPs4);
        this.slotsPs5 = Number(slotsPs5);
        this.codigo = codigo;
        this.estado = estado;
        this.costo = Number(costo);
        this.duracion = Number(duracion);
        this.creado = creado;
        this.tipo = tipo;
        this.diasRestantes = Number(diasRestantes);

    }
}
