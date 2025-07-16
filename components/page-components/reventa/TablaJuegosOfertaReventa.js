"use client"

import React, {useRef, useState} from "react";
import {toast} from "@/hooks/use-toast";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Box, Check, Clock, Copy, Gamepad2, Info, Scroll, Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useCopiarAlPortapapeles} from "@/hooks/useCopyToClipboard";
import Link from "next/link";
import {FaWhatsapp} from "react-icons/fa";
import {Button} from "@/components/ui/button";
import {FaTelegram} from "react-icons/fa6";
import ExportarExcel from "@/lib/ExportarExcel";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

function redondearCien(num) {
    const resto = num % 100;
    return resto >= 50 ? Math.ceil(num / 100) * 100 : Math.floor(num / 100) * 100;
}

function TablaJuegosOfertaReventa({juegos = [], fechaExpiracion, titulo = null}) {
    const [juegoCopiado, setJuegoCopiado] = useState(null)
    const [juegoBuscado, setJuegoBuscado] = useState("")
    const [busqueda, setBusqueda] = useState(null)
    const topRef = useRef(null); // Referencia al elemento superior

    const copiarJuego = (text, id) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setJuegoCopiado(id)
                toast({
                    title: "Copiado al portapapeles",
                    description: `"${text}" ha sido copiado.`,
                })
                setTimeout(() => setJuegoCopiado(null), 2000)
            })
            .catch((err) => {
                console.error("Error al copiar: ", err)
                toast({
                    title: "Error",
                    description: "No se pudo copiar al portapapeles.",
                    variant: "destructive",
                })
            })
    }

    const tablaProps = {
        juegoBuscado,
        juegos,
        busqueda,
        copiarJuego,
        juegoCopiado
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
                    sortedGames.sort((a, b) => a.precio - b.precio);
                    break;
                case "price-desc":
                    sortedGames.sort((a, b) => b.precio - a.precio);
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
        <article className={"w-full py-4"} ref={topRef}>
            <div className={"px-2 mt-2"}>
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
                                placeholder={"Buscar por nombre de juego 🔎"}
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
                    </div>
                    <TablaOfertas {...tablaProps}/>
                    <ExportarExcel datos={juegos}/>
                </CardContent>
            </Card>
        </article>
    )
}

const TablaOfertas = (props) => {
    return (
        <>
            <p className={"px-2"}>
                {props?.busqueda !== null ?
                    props?.busqueda.length === 0 ?
                        `No se encontraron coincidencias para: ${props?.juegoBuscado}`
                        :
                        `Se muestran resultados para: ${props?.juegoBuscado}`
                    :
                    ""
                }
            </p>
            <Table>
                <TableCaption>Juegos en oferta - Precios actualizados</TableCaption>
                <Cabecera/>
                <Cuerpo {...props}/>
            </Table>
        </>
    )
}

const Cuerpo = ({juegos = [], copiarJuego, juegoCopiado, busqueda = null}) => {
    return (
        <TableBody>
            {busqueda ?
                busqueda.map(j => (
                    <Registro
                        juego={j}
                        key={j.nombre}
                        copiarJuego={copiarJuego}
                        juegoCopiado={juegoCopiado}
                    />))
                :
                juegos.map(j => (
                    <Registro
                        juego={j}
                        key={j.nombre}
                        copiarJuego={copiarJuego}
                        juegoCopiado={juegoCopiado}
                    />))
            }
        </TableBody>
    )
}

const Registro = ({juego, copiarJuego, juegoCopiado}) => {
    const {copiar, copiado} = useCopiarAlPortapapeles()
    const mensaje = `${juego.nombre} - $${juego.precio}`
    return (
        <TableRow>
            <TableCell
                className="font-medium p-1 py-2"
                onClick={() => copiar(mensaje, juego.nombre)}
            >
                {juego.nombre}
            </TableCell>
            <TableCell className={"p-1 py-2 text-center"}>${juego.precio}</TableCell>
            <TableCell className="p-2 text-center">
                <div className={"flex gap-2"}>
                    <Link
                        href={`https://wa.me/5491132001372?text=${"Me interesa " + encodeURIComponent(mensaje)}`}
                        className="w-fit flex justify-center items-center text-center rounded-full"
                        target="_blank">
                        <FaWhatsapp className="h-7 w-7 text-green-500"/>

                    </Link>
                    <Link
                        href={`https://t.me/garretg_psn?text=${"Me interesa " + encodeURIComponent(mensaje)}`}
                        className="w-fit flex justify-center items-center text-center rounded-full"
                        target="_blank"
                    >
                        <FaTelegram className="h-7 w-7 text-blue-500"/>
                    </Link>
                </div>

            </TableCell>
            {/*<TableCell className="p-1 py-2">*/}
            {/*    <div*/}
            {/*        className={"w-fit mx-auto flex justify-center"}*/}
            {/*        onClick={() => copiarJuego(`${juego.name} - $${juego.price}`, juego.name)}*/}
            {/*    >*/}
            {/*        {juegoCopiado === juego.name ? <Check className="h-4 w-4"/> : <Copy className="h-4 w-4"/>}*/}
            {/*        <span className="sr-only">Copiar información del juego</span>*/}
            {/*    </div>*/}
            {/*</TableCell>*/}
        </TableRow>
    )
}

const Cabecera = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className={"px-2 md:px-4"}>Nombre del Juego</TableHead>
                <TableHead className={"px-2 md:px-4 text-center"}>Precio</TableHead>
                <TableHead className={"px-2 md:px-4 text-center"}>Contacto</TableHead>
            </TableRow>
        </TableHeader>
    )
}

export default TablaJuegosOfertaReventa;