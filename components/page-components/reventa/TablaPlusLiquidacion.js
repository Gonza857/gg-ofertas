"use client"

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useCopiarAlPortapapeles} from "@/hooks/useCopyToClipboard";
import {Badge} from "@/components/ui/badge";
import {Check, Copy} from "lucide-react";
import {Button} from "@/components/ui/button";
import {toast} from "@/hooks/use-toast";

const diccionarioTipos = {
    "essential": "bg-gray-300 text-black",
    "extra": "bg-yellow-500 text-black",
    "deluxe": "bg-gray-800 text-yellow-500"
}

const saberDuracion = {
    30: "1 mes",
    90: "3 meses",
    365: "12 meses"
}

function TablaPlusLiquidacion({subscripciones}) {
    const {copiado, copiar} = useCopiarAlPortapapeles()
    const textoCompleto = subscripciones
        .map(plus =>
            `PlayStation Plus ${plus.tipo} | ${plus.diasRestantes} días | ${plus.slotsPs4 > 0 ? "PS4" : ""}${(plus.slotsPs4 > 0 && plus.slotsPs5 > 0) ? "/" : ""}${plus.slotsPs5 > 0 ? "PS5" : ""} | $${plus.costo}`
        )
        .join("\n");

    return (
        <>
            <Tabla subscripciones={subscripciones}/>
            <Button
                variant={"outline"}
                onClick={() => copiar(textoCompleto)}
                className={"w-full mt-4"}
            >
                Copiar todos
            </Button>
        </>
    )

}

const Tabla = ({subscripciones = null}) => {
    if (!subscripciones) return;
    return (
        <Table>
            <TableCaption>PlayStation Plus en liquidación - Precios actualizados</TableCaption>
            <Cabecera/>
            <Cuerpo subscripciones={subscripciones}/>
        </Table>
    )
}

const Cabecera = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className={"w-7/12 md:w-5/12 px-2 md:px-4"}>Membresia</TableHead>
                <TableHead className={"w-1/12 md:w-2/12 px-2 md:px-4"}>Días restantes</TableHead>
                <TableHead className={"w-2/12 md:w-2/12 px-2 md:px-4 text-center"}>Consola</TableHead>
                <TableHead className={"w-2/12 md:w-2/12 px-2 md:px-4 text-center"}>Precio</TableHead>
                <TableHead className={"hidden md:table-cell md:w-1/12"}>Copiar</TableHead>
            </TableRow>
        </TableHeader>
    )
}

const Cuerpo = ({subscripciones}) => {
    return (
        <TableBody>
            {subscripciones.map(p => (
                <Registro
                    plus={p}
                    key={p.id}
                />))
            }
        </TableBody>
    )
}




const Registro = ({plus}) => {
    const {copiar, copiado} = useCopiarAlPortapapeles()
    const meses = saberDuracion[plus.duracion]
    const consola = `${plus.slotsPs4 > 0 ? "PS4" : ""}${(plus.slotsPs4 > 0 && plus.slotsPs5 > 0) ? "/" : ""}${plus.slotsPs5 > 0 ? "PS5" : ""}`
    const textoParaCopiar = `PlayStation Plus ${plus.tipo} |${plus.estado.toLowerCase() !== "liquidacion" ? meses : ""} ${plus.diasRestantes} días | ${consola} | $${plus.costo}`
    return (
        <TableRow onClick={() => copiar(textoParaCopiar, plus.id)}>
            <TableCell className={"p-1 py-2 flex items-center"}>
                <span>PlayStation Plus</span>
                <Badge className={`${diccionarioTipos[plus.tipo.toLowerCase()]} mx-1 md:mx-2 h-6`}>
                    {plus.tipo}
                </Badge>
            </TableCell>

            <TableCell className={"p-1 text-center"}>{plus.diasRestantes}</TableCell>
            <TableCell className={"p-1 text-sm text-center"}>{consola}</TableCell>
            <TableCell className={"p-1 text-sm text-center"}>${plus.costo}</TableCell>
            <TableCell className="hidden md:table-cell p-1">
                <div
                    onClick={() => copiar(textoParaCopiar, plus.id)}
                    className={"flex justify-center items-center cursor-pointer w-fit mx-auto"}>
                    {copiado === plus.id ? <Check className="h-4 w-4"/> : <Copy className="h-4 w-4"/>}
                    <span className="sr-only">Copiar información de PlayStation Plus</span>
                </div>
            </TableCell>
        </TableRow>
    )
}

export default TablaPlusLiquidacion;