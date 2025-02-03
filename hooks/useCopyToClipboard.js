"use client"

import { useState } from "react";
import {toast} from "@/hooks/use-toast";

export function useCopiarAlPortapapeles() {
    const [copiado, setCopiado] = useState(null);

    const copiar = (text, id) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setCopiado(id);
                toast({
                    title: "Copiado al portapapeles",
                    description: `"${text}" ha sido copiado.`,
                });

                setTimeout(() => setCopiado(null), 2000);
            })
            .catch((err) => {
                console.error("Error al copiar: ", err);
                toast({
                    title: "Error",
                    description: "No se pudo copiar al portapapeles.",
                    variant: "destructive",
                });
            });
    };

    return { copiar, copiado };
}
