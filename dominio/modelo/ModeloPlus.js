import {addDays, differenceInDays, formatDate, parse, subDays} from "date-fns";

class ModeloPlus {

    repositorioPlus
    referenciaPrecios = [
        {dias: 30, tipo: "essential", precio: 9000},
        {dias: 90, tipo: "essential", precio: 16000},
        {dias: 365, tipo: "essential", precio: 40000},
        {dias: 30, tipo: "extra", precio: 14000},
        {dias: 90, tipo: "extra", precio: 27000},
        {dias: 365, tipo: "extra", precio: 77000},
        {dias: 30, tipo: "deluxe", precio: 18000},
        {dias: 90, tipo: "deluxe", precio: 31000},
        {dias: 365, tipo: "deluxe", precio: 85000}
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
            subscripciones.sort((a, b) => {
                const codigoA = a.codigo || "";
                const codigoB = b.codigo || "";
                return codigoA.localeCompare(codigoB, undefined, { numeric: true, sensitivity: 'base' });
            });
            return subscripciones
        }

        const agrupadas = subscripciones
            .filter(s => s.diasRestantes > 0)
            .reduce((acc, curr) => {
            const tipo = curr.tipo || "otros"; // Fallback por si falta el tipo

            if (!acc[tipo]) {
                acc[tipo] = [];
            }
            acc[tipo].push(curr);
            return acc;
        }, {});

        Object.keys(agrupadas).forEach((tipo) => {
            agrupadas[tipo].sort((a, b) => {
                return a.diasRestantes - b.diasRestantes;
            });
        });

        return agrupadas
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

        const ref = this.referenciaPrecios // buscar input en las referencias por tipo y días
            .find(
                (ref) => ref.tipo.toLowerCase() === tipo.toLowerCase()
                    && Number(ref.dias) === duracion
            );

        const precioCalculado = this.#redondearCien((diasRestantes / ref.dias) * ref.precio) // con su costo, hago el calculo
        if (diasRestantes !== duracion) return this.#redondearCien(precioCalculado * 0.85)
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