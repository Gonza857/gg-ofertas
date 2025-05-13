import {addDays, differenceInDays, formatDate, parse, subDays} from "date-fns";

class ModeloPlus {

    repositorioPlus
    referenciaPrecios = [
        {dias: 30, tipo: "essential", precio: 14850},
        {dias: 90, tipo: "essential", precio: 22950},
        {dias: 365, tipo: "essential", precio: 67500},
        {dias: 30, tipo: "extra", precio: 22950},
        {dias: 90, tipo: "extra", precio: 37800},
        {dias: 365, tipo: "extra", precio: 121500},
        {dias: 30, tipo: "deluxe", precio: 28350},
        {dias: 90, tipo: "deluxe", precio: 43200},
        {dias: 365, tipo: "deluxe", precio: 135000}
    ];

    constructor(repositorio) {
        this.repositorioPlus = repositorio;
    }

    async actualizar(plus, usuario) {
        if (!usuario) throw new Error("No autorizado")
        if (!plus) throw new Error("No se pudo actualizar.")

        delete plus.diasRestantes;
        plus.slotsPs4 = Number(plus.slotsPs4)
        plus.slotsPs5 = Number(plus.slotsPs5)

        const resultado = await this.repositorioPlus.actualizar(plus)
        return {
            exito: resultado,
            mensaje: "Actualizado correctamente."
        }
    }

    async eliminar(idPlus, usuario) {
        if (!usuario) throw new Error("No autorizado")
        if (!idPlus) throw new Error("No se pudo actualizar el PlayStation Plus")
        const resultado = await this.repositorioPlus.eliminar(idPlus)
        return {
            exito: resultado,
            mensaje: "Eliminado correctamente."
        }
    }

    async guardarSubscripcion(subscripcion, usuario) {
        if (!usuario) throw new Error("No autorizado")
        if (!subscripcion) throw new Error ("No se pudo guardar la membresía.")

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

    async obtenerSubscripcionesEnStock(cliente = "customer") {
        // TODO no mostrar las concluidas
        const subscripciones = await this.repositorioPlus.obtenerTodasStock()

        // Limpiar para procesar
        subscripciones.forEach((sub) => {
            sub.diasRestantes = this.#obtenerDiasRestantes(sub)
            delete sub.precio;
            sub.costo = this.#obtenerPrecioFinalSegunParametros(sub.diasRestantes, sub.tipo, sub.duracion)
        })

        if (cliente === "admin") {
            return subscripciones
        }

        return subscripciones.filter(s => s.diasRestantes > 0)
    }

    #obtenerFechaDeCreacion(subscripcion) {
        const diasDeDiferencia = Number(subscripcion.duracion) - Number(subscripcion.diasRestantes);
        const fechaDeHoy = subDays(new Date(), diasDeDiferencia)
        return formatDate(fechaDeHoy, "dd/MM/yyyy");
    }

    #obtenerDiasRestantes(subscripcion) {
        if (!subscripcion.creado || typeof subscripcion.creado !== "string") throw new Error("Plus.Creado invalido")

        const [dia, mes, anio] = String(subscripcion.creado).split("/");
        const fechaCreada = new Date(`${anio}-${mes}-${dia}`);
        const fechaFin = addDays(fechaCreada, subscripcion.duracion)
        const hoy = new Date()
        const diasRestantes = differenceInDays(fechaFin, hoy) + 1
        return diasRestantes > 0 ? diasRestantes : 0;
    }

    #obtenerPrecioFinalSegunParametros(diasRestantes, tipo, duracion) {
        diasRestantes = Number(diasRestantes);
        duracion = Number(duracion);
        const ref = this.referenciaPrecios.find((ref) =>
            ref.tipo.toLowerCase() === tipo.toLowerCase() && Number(ref.dias) === duracion);
        const precioCalculado = this.#redondearCien((diasRestantes / ref.dias) * ref.precio)
        if (diasRestantes !== duracion) return this.#redondearCien(precioCalculado * 0.7)
        return precioCalculado;
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