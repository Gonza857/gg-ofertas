"use client"

import {toast} from "@/hooks/use-toast";
import React, {useRef, useState} from "react";
import {Box, Check, Clock, Copy, Info, Scroll} from "lucide-react";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Input} from "@/components/ui/input";
import {useCopiarAlPortapapeles} from "@/hooks/useCopyToClipboard";
import {Button} from "@/components/ui/button";
import {FaWhatsapp} from "react-icons/fa";
import Link from "next/link";

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
            return j.name.toLowerCase().includes(e.target.value.toLowerCase())
        });
        setJuegoBuscado(e.target.value)
        setBusqueda(juegosFiltrados)
    }

    const handleSortChange = (value) => {
        setBusqueda((prev) => {
            let sortedGames = [...juegos];
            switch (value) {
                case "price-asc":
                    sortedGames.sort((a, b) => a.price - b.price);
                    break;
                case "price-desc":
                    sortedGames.sort((a, b) => b.price - a.price);
                    break;
                case "name-asc":
                    sortedGames.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case "name-desc":
                    sortedGames.sort((a, b) => b.name.localeCompare(a.name));
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
        <article className={"w-full sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-4"}>
            {(titulo && !busqueda) && <h2 className="text-2xl font-bold mb-2 text-center">{titulo}</h2>}
            <InformacionPsPlus/>
            <h2 className="text-2xl font-bold mb-2 text-center">Juegos en oferta hasta
                el {fechaExpiracion} 19:00hs</h2>
            <p className={"mt-2 text-sm text-neutral-500 dark:text-neutral-400 text-center"}>
                Precio lista - Hasta 3 pagos con tarjeta de crédito/débito (
                <Link href={"/formas-de-pago"} className={"hover:underline transition-all"}>
                    Ver formas de pago
                </Link>

                )
            </p>
            <p className={"mt-2 text-sm text-neutral-500 dark:text-neutral-400 text-center"}>
                Transferencia - Precio abonando por transferencia bancaria CVU/CBU
            </p>
            <div className={"px-2 mt-2"}>
                <Table className={"my-4 border rounded"}>
                    <TableBody>
                        <TableRow>
                            <TableCell>⭐ Juego destacado/popular</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div className={"flex flex-col md:flex-row md:justify-between gap-4 pb-2 px-2 mt-2"}>
                <Input
                    onChange={buscarJuego}
                    placeholder={"Buscar por nombre de juego"}
                    className={"w-full md:w-3/4"}
                />
                <div className={"w-full md:w-1/4"}>
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
        </article>
    )
}

export default TablaJuegosOfertaConsumidores;

const InformacionPsPlus = () => {
    return (
        <div className="w-full bg-white shadow-xl rounded-xl border p-6 mb-8 mx-auto">
            <h2 className="text-xl italic font-semibold mb-4 text-center">Información Importante</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
                <div className="flex items-start">
                    <Info className="w-6 h-6 mr-2 text-blue-500 flex-shrink-0 mt-1"/>
                    <div>
                        <h3 className="font-semibold mb-2">Compatibilidad</h3>
                        <p className="text-gray-600">
                            Los juegos publicados son en cuenta PRIMARIA para PS4 & PS5. Consultar compatibilidad de
                            juegos retro. Consultar disponibilidad en cuenta SECUNDARIA.
                        </p>
                    </div>
                </div>
                <div className="flex items-start">
                    <Clock className="w-6 h-6 mr-2 text-yellow-500 flex-shrink-0 mt-1"/>
                    <div>
                        <h3 className="font-semibold mb-2">Tiempo de Entrega</h3>
                        <p className="text-gray-600">
                            Las entregas se realizan de 08:00 a 22:00. Compras realizadas fuera de este horario se
                            entregan al día siguiente.
                        </p>
                    </div>
                </div>
                <div className="flex items-start">
                    <Box className="w-6 h-6 mr-2 text-purple-500 flex-shrink-0 mt-1"/>
                    <div>
                        <h3 className="font-semibold mb-2">Envío</h3>
                        <p className="text-gray-600">
                            Se envía un usuario y contraseña junto con el instructivo de instalación para seguir los
                            pasos y poder descargar el juego en la consola.
                        </p>
                    </div>
                </div>
                <div className="flex items-start">
                    <Scroll className="w-6 h-6 mr-2 text-green-500 flex-shrink-0 mt-1"/>
                    <div>
                        <h3 className="font-semibold mb-2">Garantía</h3>
                        <p className="text-gray-600">
                            Nuestros productos son 100% originales y con licencias oficiales. La garantía abarca el
                            tiempo adquirido y garantiza el acceso al usuario.
                        </p>
                    </div>
                </div>
            </div>
            <p className={"mt-4 text-sm text-neutral-500 dark:text-neutral-400 text-center"}>
                ¡Podes copiar el juego que desees y enviarnos un mensaje! (Click en la fila o usá el botón de copiar)
            </p>
        </div>
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
                        `Se muestran ${props.busqueda.length} resultados para: ${props?.juegoBuscado}`
                    :
                    ""
                }
            </p>
            <div className={"overflow-x-auto"}>
                <Table className={"w-full"}>
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
                        key={j.name}
                    />))
                :
                juegos.map(j => (
                    <Registro
                        juego={j}
                        key={j.name}
                    />))
            }
        </TableBody>
    )
}

const Registro = ({juego}) => {
    const {copiar, copiado} = useCopiarAlPortapapeles()
    const mensaje = `${juego.name} | Precio Lista: $${juego.precioLista} | Transferencia: $${juego.precioTransferencia}`
    return (
        <TableRow>
            <TableCell
                className="font-medium p-2"
                onClick={() => copiar(mensaje, juego.name)}
            >
                {juego.name}
            </TableCell>
            <TableCell className={"p-2 text-center"}>${juego.precioLista}</TableCell>
            <TableCell className={"p-2 text-center"}>${juego.precioTransferencia}</TableCell>
            <TableCell className="p-2 text-center">
                <Link
                    href={`https://wa.me/5491132001372?text=${"Me interesa " + encodeURIComponent(mensaje)}`}
                    className="w-fit flex justify-center items-center text-center bg-green-500 p-1.5 rounded-full"
                    target="_blank">
                    <FaWhatsapp className="h-4 w-4 text-white"/>
                </Link>
            </TableCell>
        </TableRow>
    )
}

const Cabecera = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className={"w-1/2 p-2 text-center"}>Nombre del Juego</TableHead>
                <TableHead className={"w-2/12 p-2 text-center"}>Precio Lista</TableHead>
                <TableHead className={"w-2/12 p-2 text-center"}>Transferencia</TableHead>
                <TableHead className={"w-1/12 p-2 hidden md:table-cell text-center"}>Acción</TableHead>
            </TableRow>
        </TableHeader>
    )
}