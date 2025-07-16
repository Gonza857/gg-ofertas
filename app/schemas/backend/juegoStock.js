import z from "zod"

export const updateJuegoStock = z.object({
    consola: z.array(z.any()),
    editado: z.string().transform(str => new Date(str)).pipe(z.date()),
    id: z.string(),
    idioma: z.string(),
    nombre: z.string(),
    precioCliente: z.number(),
    precioReventa: z.number(),
    stock: z.number(),
    tipo: z.string(),
    mostrarIdioma: z.boolean()
})