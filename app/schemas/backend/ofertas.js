import z from "zod"

export const juegosOferta = z.object({
    cliente: z.string().optional().transform((v) => v === 'undefined' ? undefined : v).nullable(),
    todas: z.string().optional().transform((v) => v === 'true').nullable(),
    nro: z.string().optional().transform((v) => v === 'undefined' ? undefined : parseInt(v)).nullable(),
    estaActiva: z.string().optional().transform((v) => v === 'true').nullable(),
})

export const patchOferta = z.object({
    id: z.string().optional(),
    estaActiva: z.boolean().optional(),
    juegos: z.array(z.any()).optional(), // juegos sin validación estricta por ahora
    nro: z.number().optional(),
    prioridad: z.number().optional(),
    termina: z.string().optional(),
    titulo: z.string().optional(),
}).refine(data => Object.keys(data).length > 0, {
    message: "Debe incluir al menos un campo para actualizar",
})

export const postOferta = z.object({
    termina: z.string(),
    estaActiva: z.boolean().default(false),
    juegos: z.array(z.any()),
    prioridad: z.number().default(null),
    titulo: z.string()
})