"use client"

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {Convertidor} from "@/app/helpers/Converter";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Copy} from "lucide-react";
import {subirOferta} from "@/dominio/servicios/juegos";
import {toastError, toastSuccess} from "@/lib/Toast";
import {useRouter} from "next/navigation";

const converter = new Convertidor();

function AgregarOferta() {
    const [games, setGames] = useState([]);
    const router = useRouter();

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

    const guardar = async () => {
        const {mensaje, exito} = await subirOferta(games)
        if (exito) {
            // router.push("/")
            return toastSuccess(mensaje)
        }
        return toastError(mensaje)
    }

    return (
        <section className={"w-10/12 mx-auto"}>
            <h1 className="text-3xl font-bold tracking-tight mb-4">Crear nueva oferta</h1>
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
                    </div>
                </form>
            </div>
            <PreviewTablaJuegos ofertaNueva={games} guardar={guardar}/>
        </section>
    )
}

export default AgregarOferta;

const PreviewTablaJuegos = ({ofertaNueva, guardar}) => {
    const {juegos = [], termina = "null", titulo = "null"} = ofertaNueva
    if (juegos === [] || titulo === "null") return;

    return (
        <section className={"w-full mt-4"}>
            <h2 className="text-2xl font-bold mb-2 text-center">{titulo}</h2>
            <h3 className="text-2xl font-bold mb-2 text-center">Juegos en oferta hasta el {termina} 19:00hs</h3>
            <TablaOfertas juegos={juegos} guardar={guardar}/>
        </section>
    )


}

const TablaOfertas = (props) => {
    return (
        <div className={"flex flex-col gap-4"}>
            <Table>
                <TableCaption>Juegos en oferta - Precios actualizados</TableCaption>
                <Cabecera/>
                <Cuerpo {...props}/>
            </Table>
            <Button className={"w-full bg-green-700"} onClick={() => props.guardar()}>
                Guardar
            </Button>
        </div>
    )
}

const Cuerpo = ({juegos = []}) => {
    return (
        <TableBody>
            {juegos.map(j => (
                <Registro
                    juego={j}
                    key={j.nombre}
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
    const precioLista = redondearCien(juego.precioBase * 1.25).toFixed(0)
    const precioTransferencia = redondearCien(precioLista * 0.8).toFixed(0)
    const precioReventa = redondearCien((juego.precioBase) * 0.95).toFixed(0)

    return (
        <TableRow>
            <TableCell className="font-medium p-2">{juego.nombre}</TableCell>
            <TableCell className={"p-2 text-center"}>${precioLista}</TableCell>
            <TableCell className={"p-2 text-center"}>${precioTransferencia}</TableCell>
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