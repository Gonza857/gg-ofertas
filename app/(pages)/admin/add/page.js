"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import Link from "next/link";
import {addDoc, collection} from "firebase/firestore";
import {Convertidor} from "@/app/helpers/Converter";
import {db} from "@/app/firebase/config";
import {Firebase} from "@/app/helpers/Firebase";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Check, Copy} from "lucide-react";
import {obtenerJuegosOferta, subirOfertas} from "@/dominio/servicios/juegos";
import {toastError, toastSuccess} from "@/lib/Toast";
import {useRouter} from "next/navigation";

const converter = new Convertidor();
const firebase = new Firebase();


export default function Home() {
    const [games, setGames] = useState([]);
    const [idParaBorrar, setIdParaBorrar] = useState(null);
    const [ofertas, setOfertas] = useState([]);
    const [ofertasInfo, setOfertasInfo] = useState(null);
    const router = useRouter()

    const cargarOfertas = async () => {
        try {
            const {juegos = [], termina = "null", titulo = "null", id = null} = await obtenerJuegosOferta()
            setOfertasInfo({termina, titulo, id})
            setOfertas(juegos);
        } catch (error) {
            console.error("Error al obtener las ofertas:", error);
        }
    };

    useEffect(() => {
        cargarOfertas();
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        let a = new FormData(e.target);
        const convertedResult = converter.convertir(a.get("game"));
        let oferta = {
            termina: a.get("ends"),
            titulo: a.get("title"),
            juegos: [...convertedResult],
        };
        setGames(oferta);
    };

    const guardarOfertas = async () => {
        const {mensaje, exito} = await subirOfertas(games)
        if (exito) {
            router.push("/")
            return toastSuccess(mensaje)
        }
        return toastError(mensaje)

    }

    const filterProducts = (param) => {
        if (param == 1)
            return [...games].sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        if (param == 2)
            return [...games].sort((a, b) => {
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            });
        if (param == 3)
            return [...games].sort((a, b) => {
                if (a.price < b.price) {
                    return -1;
                }
                if (a.price > b.price) {
                    return 1;
                }
                return 0;
            });
        if (param == 4)
            return [...games].sort((a, b) => {
                if (a.price < b.price) {
                    return 1;
                }
                if (a.price > b.price) {
                    return -1;
                }
                return 0;
            });
    };

    const handleChange = (param) => {
        setGames(filterProducts(Number(param.target.value)));
    };

    return (
        <>
            <header className="flex w-full h-20 bg-cyan-900">
                <div className="w-10/12 mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">Garret Games</h1>
                    <nav>
                        <ul>
                            <Link href={"/"}>
                                <li>Ofertas</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="w-full min-h-screen flex flex-col">
                <div className={"d-flex gap-4"}>
                    <button className="px-4 py-2 bg-red-500 rounded-lg"
                            onClick={() => firebase.eliminarOfertas(idParaBorrar)}>
                        Reset
                    </button>
                </div>
                <div className={"bor1"}>
                    Elegido: {idParaBorrar}
                </div>
                <div>
                    <button className="px-4 py-2 bg-red-500 rounded-lg"
                            onClick={() => setIdParaBorrar(ofertasInfo?.id)}>
                        {ofertasInfo?.titulo}
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <form
                        className="w-full flex flex-col gap-2 p-4 border rounded space-y-4"
                        onSubmit={handleSubmit}
                        method="post"
                    >
                        <div className="space-y-2">
                            <Label htmlFor="ends">Fecha de conclusión</Label>
                            <Input
                                name="ends"
                                placeholder={"01/01/2000"}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="title">Titulo</Label>
                            <Input
                                name="title"
                                placeholder={"Ofertas de año nuevo"}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="game">Inserte listado de juegos</Label>
                            <Textarea
                                name="game"
                                className="resize-y text-black p-2"
                            />
                        </div>
                        <div className={"flex gap-4"}>
                            <Button
                                type={"submit"}
                                variant={"outline"}
                            >
                                Preview
                            </Button>
                            <Button
                                type={"button"}
                                onClick={() => guardarOfertas()}
                            >
                                Confirmar
                            </Button>
                        </div>
                    </form>
                </div>
                <PreviewTablaJuegos juegos={games.juegos} termina={games.termina} titulo={games.titulo}/>
            </main>
        </>
    );
}

const PreviewTablaJuegos = ({juegos = [], termina = "null", titulo = "null"}) => {
    if (!juegos) return
    return (
        <section className={"lg:w-3/4 mx-auto"}>
            {titulo && <h2 className="text-2xl font-bold mb-2 text-center">{titulo}</h2>}
            <h3 className="text-2xl font-bold mb-2 text-center">Juegos en oferta hasta el {termina} 19:00hs</h3>
            <TablaOfertas juegos={juegos}/>
        </section>
    )


}

const TablaOfertas = (props) => {
    return (
        <Table>
            <TableCaption>Juegos en oferta - Precios actualizados</TableCaption>
            <Cabecera/>
            <Cuerpo {...props}/>
        </Table>
    )
}

const Cuerpo = ({juegos = []}) => {
    return (
        <TableBody>
            {juegos.map(j => (
                <Registro
                    juego={j}
                    key={j.name}
                />))
            }
        </TableBody>
    )
}

function redondearCien(num) {
    const resto = num % 100;
    return resto >= 50 ? Math.ceil(num / 100) * 100 : Math.floor(num / 100) * 100;
}

const Registro = ({juego}) => {
    const precioLista = redondearCien(juego.price).toFixed(0)
    const precioTransferencia = redondearCien((juego.price) * 1.15).toFixed(0)
    const precioReventa = redondearCien((juego.price) * 0.95).toFixed(0)

    return (
        <TableRow>
            <TableCell className="font-medium p-2">{juego.name}</TableCell>
            <TableCell className={"p-2 text-center"}>${precioTransferencia}</TableCell>
            <TableCell className={"p-2 text-center"}>${precioLista}</TableCell>
            <TableCell className={"p-2 text-center"}>${precioReventa}</TableCell>
            <TableCell className="text-right p-2">
                <div className={"mx-auto w-fit"}>
                    <Copy className="h-4 w-4"/>
                    <span className="sr-only">Copiar información del juego</span>
                </div>
            </TableCell>
        </TableRow>
    )
}

const Cabecera = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead>Nombre del Juego</TableHead>
                <TableHead className={"text-center"}>P. Lista</TableHead>
                <TableHead className={"text-center"}>P. Transferencia</TableHead>
                <TableHead className={"text-center"}>P. Reventa</TableHead>
                <TableHead className={"text-center"}>Copiar</TableHead>
            </TableRow>
        </TableHeader>
    )
}
