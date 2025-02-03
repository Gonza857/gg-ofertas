import {differenceInDays, formatDate, parse, subDays} from "date-fns";

class ModeloPlus {

    repositorioPlus
    referenciaPrecios = [
        {dias: 30, tipo: "essential", precio: 8400},
        {dias: 90, tipo: "essential", precio: 15000},
        {dias: 365, tipo: "essential", precio: 40000},
        {dias: 30, tipo: "extra", precio: 11500},
        {dias: 90, tipo: "extra", precio: 25000},
        {dias: 365, tipo: "extra", precio: 60000},
        {dias: 30, tipo: "deluxe", precio: 13500},
        {dias: 90, tipo: "deluxe", precio: 30000},
        {dias: 365, tipo: "deluxe", precio: 70000}
    ];

    constructor(repositorio) {
        this.repositorioPlus = repositorio;
    }

    async actualizar (plus) {
        if (!plus) throw new Error("No se pudo actualizar.")
        delete plus.diasRestantes;
        const resultado = await this.repositorioPlus.actualizar(plus)
        return {
            exito: resultado,
            mensaje: "Actualizado correctamente."
        }
    }

    async eliminar (idPlus) {
        if (!idPlus) throw new Error ("No se pudo actualizar el PlayStation Plus")
        const resultado = await this.repositorioPlus.eliminar(idPlus)
        return {
            exito: resultado,
            mensaje: "Eliminado correctamente."
        }
    }

    async guardarSubscripcion(subscripcion) {
        if (subscripcion.estado.toLowerCase() === "liquidacion") {
            subscripcion.creado = this.#obtenerFechaDeCreacion(subscripcion)
        } else {
            subscripcion.creado = formatDate(new Date(), "dd/MM/yyyy");
        }
        subscripcion.costo = Number(subscripcion.costo)
        subscripcion.duracion = Number(subscripcion.duracion)
        subscripcion.slotsPs4 = Number(subscripcion.slotsPs4)
        subscripcion.slotsPs5 = Number(subscripcion.slotsPs5)
        delete subscripcion.diasRestantes;
        const resultado = await this.repositorioPlus.guardar(subscripcion);
        if (!resultado) throw new Error("No se pudo guardar la membresía.")
        return {
            exito: true,
            mensaje: "Membresía guardada correctamente."
        }
    }

    async obtenerSubscripcionesEnStock() {
        // TODO no mostrar las concluidas
        const subscripciones = await this.repositorioPlus.obtenerTodasStock()
        console.log("MODELO PLUS: obtengo esto de la bd", subscripciones)
        return subscripciones.map((s) => {
            if (s.diasRestantes <= 0) return;
            s.diasRestantes = this.#obtenerDiasRestantes(s);
            delete s.precio;
            s.costo = this.#obtenerPrecioFinalSegunParametros(s.diasRestantes, s.tipo, s.duracion) * 0.9
            console.log(`costo calculado ${s.costo}`)
            return s;
        })
    }

    #obtenerFechaDeCreacion(subscripcion) {
        const diasDeDiferencia = Number(subscripcion.duracion) - Number(subscripcion.diasRestantes);
        const fechaDeHoy = subDays(new Date(), diasDeDiferencia)
        return formatDate(fechaDeHoy, "dd/MM/yyyy");
    }

    #obtenerDiasRestantes(subscripcion) {
        const a = new Date(parse(subscripcion.creado, 'dd/MM/yyyy', new Date()));
        a.setDate(a.getDate() + Number(subscripcion.duracion));
        return differenceInDays(a, new Date());
    }

    #obtenerPrecioFinalSegunParametros(diasRestantes, tipo, duracion) {
        diasRestantes = Number(diasRestantes);
        duracion = Number(duracion);
        const ref = this.referenciaPrecios.find((ref) =>
            ref.tipo.toLowerCase() === tipo.toLowerCase() && Number(ref.dias) === duracion);
        if (ref) return this.#redondearCien((diasRestantes / ref.dias) * ref.precio);
        return 0;
    }

    #redondearCien(numero) {
        return Math.round(numero / 100) * 100;
    }
}

export default ModeloPlus;

/*

creado 10/1/25 - 12m - 365d
agregado 20/1/25 365 - 355 -> 10 entonces fecha de hoy menos 10d

creado 10/1/24 - 3m - 90d
agregado 20/1/25 90 - 80

*/