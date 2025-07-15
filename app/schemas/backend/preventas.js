import z from "zod";

export const postPreventa = z.object({
    titulo: z.string(),
    fechaLanzamiento: z.string(),
    precioBase: z.number(),
    precioClienteTransferencia: z.number(),
    precioClienteLista: z.number(),
    precioReventa: z.number(),
    plataforma: z.string(),
    region: z.string(),
})