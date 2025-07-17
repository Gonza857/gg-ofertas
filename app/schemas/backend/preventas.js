import z from "zod";

export const getPreventas = z.object({
    cliente: z.string(),
})

export const postPreventa = z.object({
    titulo: z.string().min(1, "El título es obligatorio"),
    plataforma: z.string().min(1),
    fechaLanzamiento: z.string().min(1),
    region: z.string().min(1),
    tipo: z.string(),
    estadoImagen: z.string()
        .transform(val => parseFloat(val))
        .refine(val => !isNaN(val), { message: "Debe ser un número válido" }).optional(),
    precioBase: z
        .string()
        .transform(val => parseFloat(val))
        .refine(val => !isNaN(val), { message: "Precio base inválido" }),

    precioClienteTransferencia: z
        .string()
        .transform(val => parseFloat(val))
        .refine(val => !isNaN(val), { message: "Precio transferencia inválido" }),

    precioClienteLista: z
        .string()
        .transform(val => parseFloat(val))
        .refine(val => !isNaN(val), { message: "Precio lista inválido" }),

    precioReventa: z
        .string()
        .transform(val => parseFloat(val))
        .refine(val => !isNaN(val), { message: "Precio reventa inválido" }),

    imagen: z
        .instanceof(File)
        .refine(file => file.size > 0, { message: "La imagen es obligatoria" }),
});

export const patchPreventa = postPreventa.partial();