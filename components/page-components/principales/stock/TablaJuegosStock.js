"use client"

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useCopiarAlPortapapeles} from "@/hooks/useCopyToClipboard";
import {Check, Copy} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import ordenador from "@/lib/ordenamiento";
import {useRouter, useSearchParams} from "next/navigation";

function TablaJuegosStock({juegos: s, cliente = false}) {
    const [juegos, setJuegos] = useState(s || [])
    const [juegoBuscado, setJuegoBuscado] = useState("")
    const [stockFiltrado, setStockFiltrado] = useState([])
    const [filtros, setFiltros] = useState({
        tipo: [],
        consola: [],
        estaBuscando: false
    });


    useEffect(() => {
        if (filtros.tipo.length === 0 && filtros.consola.length === 0) {
            setStockFiltrado([])
        } else {
            setStockFiltrado(filtrarJuegos())
        }
    }, [filtros]);


    // Manejar selección de filtros
    const handleFilterChange = (category, value) => {
        setFiltros((prev) => {
            const newValues = prev[category].includes(value)
                ? prev[category].filter((item) => item !== value) // Quitar si ya está
                : [...prev[category], value]; // Agregar si no está
            return {...prev, [category]: newValues};
        });
    };


    // Filtrar juegos según los filtros seleccionados
    const filtrarJuegos = () => {
        return [...juegos].filter((juego) => {
            if (filtros.tipo.length > 0 && filtros.consola.length > 0) {
                return (
                    filtros.tipo.includes(juego.tipo.toLowerCase())
                    && juego.consola.some(c => filtros.consola.includes(c.toLowerCase()))
                );
            } else {
                return (
                    filtros.tipo.includes(juego.tipo.toLowerCase())
                    || juego.consola.some(c => filtros.consola.includes(c.toLowerCase()))
                );
            }

        });
    }

    const buscarJuego = (e) => {
        if (e.target.value.length === 0) {
            setJuegos(s)
            setJuegoBuscado("")
            return;
        }
        const juegosFiltrados = [...s].filter((j) => {
            return j.nombre.toLowerCase().includes(e.target.value.toLowerCase())
        });
        setJuegoBuscado(e.target.value)
        setJuegos(juegosFiltrados)
    }

    const topRef = useRef(null); // Referencia al elemento superior

    const handleSortChange = (value) => {
        if (stockFiltrado.length > 0) {
            setStockFiltrado(ordenador.ordenarSegunParametro(value, stockFiltrado))
        } else {
            setJuegos(ordenador.ordenarSegunParametro(value, juegos))
        }

        // Desplazar hacia la parte superior
        if (topRef.current) {
            topRef.current.scrollIntoView({behavior: "smooth"});
        }
    }

    const tablaProps = {
        cliente,
        juegos: filtros.tipo.length === 0 && filtros.consola.length === 0 ? juegos : stockFiltrado
    }

    return (
        <>
            <Buscar_Ordenar
                buscarJuego={buscarJuego}
                handleSortChange={handleSortChange}
                juegoBuscado={juegoBuscado}
            />
            <div className="p-2 lg:p-2 flex flex-col sm:flex-row gap-2 md:gap-4">
                {/* Filtros */}
                <div className="lg:mb-2 sm:border-r pe-2 md:pe-4">
                    <h3 className="text-sm font-semibold pb-2">Tipo de Cuenta</h3>
                    <div className="flex gap-2">
                        <Label className="flex items-center space-x-2">
                            <Checkbox
                                checked={filtros.tipo.includes("primaria")}
                                onCheckedChange={() => handleFilterChange("tipo", "primaria")}
                            />
                            <span>Primaria</span>
                        </Label>
                        <Label className="flex items-center space-x-2">
                            <Checkbox
                                checked={filtros.tipo.includes("secundaria")}
                                onCheckedChange={() => handleFilterChange("tipo", "secundaria")}
                            />
                            <span>Secundaria</span>
                        </Label>
                    </div>
                </div>

                {/*<div className="lg:mb-2 sm:border-r pe-2 md:pe-4">*/}
                {/*    <h3 className="text-sm font-semibold pb-2">Consola</h3>*/}
                {/*    <div className="flex gap-2">*/}
                {/*        <Label className="flex items-center space-x-2">*/}
                {/*            <Checkbox*/}
                {/*                checked={filtros.consola.includes("ps4")}*/}
                {/*                onCheckedChange={() => handleFilterChange("consola", "ps4")}*/}
                {/*            />*/}
                {/*            <span>PS4</span>*/}
                {/*        </Label>*/}
                {/*        <Label className="flex items-center space-x-2">*/}
                {/*            <Checkbox*/}
                {/*                checked={filtros.consola.includes("ps5")}*/}
                {/*                onCheckedChange={() => handleFilterChange("consola", "ps5")}*/}
                {/*            />*/}
                {/*            <span>PS5</span>*/}
                {/*        </Label>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>

            {juegoBuscado &&
                <p className={"py-3 text-sm text-gray-600"}>Se muestran resultados para: {juegoBuscado}</p>}
            <Tabla {...tablaProps}/>
        </>
    )
}

const Buscar_Ordenar = ({buscarJuego, handleSortChange}) => {
    return (
        <div className={"flex flex-col md:flex-row md:justify-between gap-4 py-2 px-2"}>
            <Buscador buscarJuego={buscarJuego}/>
            <Ordenador handleSortChange={handleSortChange}/>
        </div>
    )
}

const Buscador = ({buscarJuego}) => {
    return (
        <Input
            onChange={buscarJuego}
            placeholder={"Buscar por nombre de juego"}
            className={"w-full"}
        />
    )
}

const Ordenador = ({handleSortChange}) => {
    return (
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
    )
}


const Tabla = (props) => {
    return (
        <Table>
            <TableCaption>
                {
                    props.juegos.length === 0
                        ? "No se encontraron resultados" : "Juegos en stock - Precios actualizados"
                }
            </TableCaption>
            <Cabecera/>
            <Cuerpo {...props}/>
        </Table>
    )
}

const Cabecera = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className={"w-4/12 md:w-3/12 px-2 md:px-4"}>Nombre</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Consola</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Precio</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Tipo</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center hidden md:table-cell"}>Copiar</TableHead>
            </TableRow>
        </TableHeader>
    )
}

const Cuerpo = ({juegos, cliente}) => {
    return (
        <TableBody>
            {juegos.map(j => (
                <Registro
                    juego={j}
                    key={j.id}
                    cliente={cliente}
                />))
            }
        </TableBody>
    )
}

const Registro = ({juego: j, cliente}) => {
    const {copiar, copiado} = useCopiarAlPortapapeles()
    const precio = cliente ? j.precioCliente : j.precioReventa
    const textoParaCopiar = `${j.nombre} ${j.mostrarIdioma ? j.idioma : ""} | ${j.tipo} | ${j.consola} | $${precio.toLocaleString("es-AR")}`;

    return (
        <TableRow onClick={() => copiar(textoParaCopiar, j.id)}>
            <TableCell className={"p-1 py-2"}>{j.nombre} {j.mostrarIdioma && j.idioma}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.consola.join("/")}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>${precio.toLocaleString("es-AR")}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.tipo}</TableCell>
            <TableCell className="hidden md:table-cell p-1">
                <div
                    onClick={() => copiar(textoParaCopiar, j.id)}
                    className={"flex justify-center items-center cursor-pointer w-fit mx-auto"}>
                    {copiado === j.id ? <Check className="h-4 w-4"/> : <Copy className="h-4 w-4"/>}
                    <span className="sr-only">Copiar información del Juego</span>
                </div>
            </TableCell>
        </TableRow>
    )
}

export default TablaJuegosStock;