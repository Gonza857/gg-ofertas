"use client"

import {toast} from "@/hooks/use-toast";
import React, {useRef, useState} from "react";
import {Box, Check, Clock, Copy, Gamepad2, Info, Scroll, Search} from "lucide-react";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Input} from "@/components/ui/input";
import {useCopiarAlPortapapeles} from "@/hooks/useCopyToClipboard";
import {Button} from "@/components/ui/button";
import {FaWhatsapp} from "react-icons/fa";
import Link from "next/link";
import Recordatorios from "@/components/page-components/consumidores/juegos/ofertas/Recordatorios";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

function redondearCien(num) {
    const resto = num % 100;
    return resto >= 50 ? Math.ceil(num / 100) * 100 : Math.floor(num / 100) * 100;
}

function TablaJuegosOfertaConsumidores({juegos = [], fechaExpiracion, titulo = null}) {
    const [juegoBuscado, setJuegoBuscado] = useState("")
    const [busqueda, setBusqueda] = useState(null)
    const topRef = useRef(null); // Referencia al elemento superior


    const tablaProps = {
        juegoBuscado,
        juegos,
        busqueda,
    }

    const buscarJuego = (e) => {
        if (e.target.value.length === 0) {
            setBusqueda(null)
        }
        const juegosFiltrados = [...juegos].filter((j) => {
            return j.nombre.toLowerCase().includes(e.target.value.toLowerCase())
        });
        setJuegoBuscado(e.target.value)
        setBusqueda(juegosFiltrados)
    }

    const handleSortChange = (value) => {
        setBusqueda((prev) => {
            let sortedGames = [...juegos];
            switch (value) {
                case "price-asc":
                    sortedGames.sort((a, b) => {
                        const precioA = (a.precioLista + a.precioTransferencia) / 2
                        const precioB = (b.precioLista + b.precioTransferencia) / 2
                        return precioA - precioB
                    });
                    break;
                case "price-desc":
                    sortedGames.sort((a, b) => {
                        const precioA = (a.precioLista + a.precioTransferencia) / 2
                        const precioB = (b.precioLista + b.precioTransferencia) / 2
                        return precioB - precioA
                    });
                    break;
                case "name-asc":
                    sortedGames.sort((a, b) => a.nombre.localeCompare(b.nombre));
                    break;
                case "name-desc":
                    sortedGames.sort((a, b) => b.nombre.localeCompare(a.nombre));
                    break;
                default:
                    sortedGames = juegos;
                    break;
            }
            return sortedGames;
        });

        // Desplazar hacia la parte superior
        if (topRef.current) {
            topRef.current.scrollIntoView({behavior: "smooth"});
        }

    }


    return (
        <article className={"w-full pb-4"}>
            <div>
                <Table className={"my-4 border rounded"}>
                    <TableBody>
                        <TableRow>
                            <TableCell>⭐ Juego destacado/popular</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className={"flex gap-2"}>
                        <Gamepad2 className="h-5 w-5"/>
                        Juegos en oferta PS4/PS5
                    </CardTitle>
                    <CardDescription>Precio en cuenta primaria</CardDescription>
                </CardHeader>
                <CardContent className={"space-y-4 p-2 md:p-6"}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"/>
                            <Input
                                onChange={buscarJuego}
                                placeholder={"Buscar por nombre de juego"}
                                className={"pl-10"}
                            />
                        </div>
                        <div className="flex gap-2">
                            <Select onValueChange={handleSortChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Ordenar por..."/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="revelancia">Revelancia</SelectItem>
                                        <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
                                        <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
                                        <SelectItem value="name-asc">Nombre: A-Z</SelectItem>
                                        <SelectItem value="name-desc">Nombre: Z-A</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div
                            className="md:hidden bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                            <p className="text-sm text-blue-900 dark:text-blue-100 text-center">
                                💡 Desliza la tabla hacia la derecha para ver todas las columnas
                            </p>
                        </div>
                    </div>
                    <TablaOfertas {...tablaProps}/>
                </CardContent>
            </Card>
        </article>
    )
}

export default TablaJuegosOfertaConsumidores;

const TablaOfertas = (props) => {
    return (
        <>
            <p className={"px-2"}>
                {props?.busqueda !== null ?
                    props?.busqueda.length === 0 ?
                        `No se encontraron coincidencias para: ${props?.juegoBuscado}`
                        :
                        `Se muestran ${props.busqueda.length} resultados para: ${props?.juegoBuscado}`
                    :
                    ""
                }
            </p>
            <div className={"overflow-x-auto"}>
                <Table className={"min-w-[500px]"}>
                    <TableCaption>Juegos en oferta - Precios actualizados</TableCaption>
                    <Cabecera/>
                    <Cuerpo {...props}/>
                </Table>
            </div>

        </>
    )
}

const Cuerpo = ({juegos = [], busqueda = null}) => {
    return (
        <TableBody>
            {busqueda ?
                busqueda.map(j => (
                    <Registro
                        juego={j}
                        key={j.nombre}
                    />))
                :
                juegos.map(j => (
                    <Registro
                        juego={j}
                        key={j.nombre}
                    />))
            }
        </TableBody>
    )
}

const Registro = ({juego}) => {
    const {copiar, copiado} = useCopiarAlPortapapeles()
    const mensaje = `${juego.nombre} | Precio Lista: $${juego.precioLista} | Transferencia: $${juego.precioTransferencia}`
    return (
        <TableRow>
            <TableCell
                className="font-medium p-2 tituloJuego md:text-base"
                onClick={() => copiar(mensaje, juego.nombre)}
            >
                {juego.nombre}
            </TableCell>
            <TableCell className={"p-2 text-center text-cyan-800 font-semibold tituloJuego md:text-base"}>
                ${juego.precioTransferencia}
            </TableCell>
            <TableCell className={"p-2 text-center tituloJuego md:text-base"}>${juego.precioLista}</TableCell>
            <TableCell className="p-2 text-center">
                <Link
                    href={`https://wa.me/5491132001372?text=${"Me interesa " + encodeURIComponent(mensaje)}`}
                    className="mx-auto w-fit flex justify-center items-center text-center bg-green-500 p-1.5 rounded-full"
                    target="_blank">
                    <FaWhatsapp className="h-4 w-4 text-white"/>
                </Link>
            </TableCell>
        </TableRow>
    )
}

const Cabecera = () => {
    return (
        <TableHeader className={"sticky top-0"}>
            <TableRow>
                <TableHead className={"w-[50%] p-2 text-center"}>Nombre del Juego</TableHead>
                <TableHead className={"w-[20%] p-2 text-center"}>Transferencia</TableHead>
                <TableHead className={"w-[20%] p-2 text-center"}>Precio Lista</TableHead>
                <TableHead className={"w-[10%] p-2 hidden md:table-cell text-center"}>Contacto</TableHead>
            </TableRow>
        </TableHeader>
    )
}