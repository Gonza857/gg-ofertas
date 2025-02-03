"use client"

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useCopiarAlPortapapeles} from "@/hooks/useCopyToClipboard";
import {Badge} from "@/components/ui/badge";
import {Check, Copy} from "lucide-react";

function TablaPlusLiquidacion({subscripciones}) {
    return <Tabla subscripciones={subscripciones}/>
}

const Tabla = ({subscripciones}) => {
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
                <TableHead>Membresia</TableHead>
                <TableHead>Días restantes</TableHead>
                <TableHead>Consola</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Copiar</TableHead>
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

const saberDuracion = {
    30: "1 mes",
    90: "3 meses",
    365: "12 meses"
}

const diccionarioTipos = {
    "essential": "bg-gray-300 text-black",
    "extra": "bg-yellow-500 text-black",
    "deluxe": "bg-gray-800 text-yellow-500"
}

const Registro = ({plus}) => {
    const {copiar, copiado} = useCopiarAlPortapapeles()
    const meses = saberDuracion[plus.duracion]
    const consola = `${plus.slotsPs4 > 0 ? "PS4" : ""} ${(plus.slotsPs4 > 0 && plus.slotsPs5 > 0) ? "/" : ""} ${plus.slotsPs5 > 0 ? "PS5" : ""}`
    const textoParaCopiar = `PlayStation Plus ${plus.tipo} ${meses} ${consola} ${plus.costo}`
    return (
        <TableRow>
            <TableCell>
                PlayStation Plus
                <Badge className={`${diccionarioTipos[plus.tipo.toLowerCase()]} mx-2`}>
                    {plus.tipo}
                </Badge>
                {meses}
            </TableCell>

            <TableCell className={"text-center"}>{plus.diasRestantes}</TableCell>
            <TableCell>{consola}</TableCell>
            <TableCell>${plus.costo}</TableCell>
            <TableCell className="hidden md:table-cell p-2">
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