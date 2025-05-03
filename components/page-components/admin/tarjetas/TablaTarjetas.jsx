import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useState} from "react";
import {Input} from "@/components/ui/input";
import {Pen, Save, Trash2} from "lucide-react";
import {FcCancel} from "react-icons/fc";
import {Switch} from "@/components/ui/switch";

function TablaTarjetas(props){
    return (
        <Table>
            <TableCaption>Tarjetas de regalo - Precios actualizados</TableCaption>
            <Cabecera/>
            <Cuerpo {...props}/>
        </Table>
    )
}

const Cabecera = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className={"w-4/12 px-2 md:px-4"}>Tarjeta de regalo</TableHead>
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>Región</TableHead>
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>V.C</TableHead>
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>P.C</TableHead>
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>P.R</TableHead>
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>Editar</TableHead>
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>Eliminar</TableHead>
            </TableRow>
        </TableHeader>
    )
}

const Cuerpo = ({tarjetas, editar, eliminar, guardar, cancelar}) => {
    return (
        <TableBody>
            {tarjetas.map(p => {
                if (p.modoEdicion) return (<RegistroEditable
                    o={p}
                    key={p.id}
                    guardar={guardar}
                    cancelar={cancelar}
                />)
                return (<Registro
                    o={p}
                    key={p.id}
                    editar={editar}
                    eliminar={eliminar}
                />)
            })}
        </TableBody>
    )
}

const RegistroEditable = ({o, guardar, cancelar}) => {
    const [datosForm, setDatosForm] = useState({
        id: o.id,
        nombre: o.nombre,
        region: o.region,
        precioCliente: o.precioCliente,
        precioReventa: o.precioReventa,
        mostrarCliente: o.mostrarCliente
    })

    const realizarCambio = (e) => {
        setDatosForm(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    return (
        <TableRow>
            <TableCell className={"p-1 text-left"}>
                <Input
                    type={"text"}
                    name={"nombre"}
                    defaultValue={o.nombre}
                    onChange={(e) => realizarCambio(e)}
                />
            </TableCell>
            <TableCell className={"p-1 text-center"}>
                <Input
                    className={"text-center"}
                    type={"text"}
                    name={"region"}
                    defaultValue={o.region}
                    onChange={(e) => realizarCambio(e)}
                />
            </TableCell>
            <TableCell className={"p-1 text-center"}>
                <Switch
                    id="mostrarCliente"
                    checked={datosForm.mostrarCliente}
                    onCheckedChange={(checked) =>
                        setDatosForm(prev => ({ ...prev, mostrarCliente: checked }))
                    }
                />
            </TableCell>
            <TableCell className={"p-1 text-center"}>
                <Input
                    className={"text-center"}
                    type={"number"}
                    name={"precioCliente"}
                    defaultValue={o.precioCliente}
                    onChange={(e) => realizarCambio(e)}
                />
            </TableCell>
            <TableCell className={"p-1 text-center"}>
                <Input
                    className={"text-center"}
                    type={"number"}
                    name={"precioReventa"}
                    defaultValue={o.precioReventa}
                    onChange={(e) => realizarCambio(e)}
                />
            </TableCell>
            <TableCell className={"p-1 text-center"}>
                <Save
                    className="h-4 w-4 mx-auto"
                    onClick={() => guardar(datosForm)}
                />
            </TableCell>
            <TableCell className={"p-1 text-center"}>
                <FcCancel
                    className="h-4 w-4 mx-auto"
                    onClick={() => cancelar(o.id)}
                />
            </TableCell>
        </TableRow>
    )
}

const Registro = ({o, eliminar, editar}) => {
    return (
        <TableRow>
            <TableCell className={"p-1 text-left"}>{o.nombre}</TableCell>
            <TableCell className={"p-1 text-center"}>{o.region}</TableCell>
            <TableCell className={"p-1 text-center"}>{o.mostrarCliente ? "Sí" : "No"}</TableCell>
            <TableCell className={"p-1 text-center"}>${o.precioCliente.toLocaleString("es-AR")}</TableCell>
            <TableCell className={"p-1 text-center"}>${o.precioReventa.toLocaleString("es-AR")}</TableCell>
            <TableCell className={"p-1 text-center"}>
                <Pen
                    className="h-4 w-4 mx-auto"
                    onClick={() => editar(o)}
                />
            </TableCell>
            <TableCell className={"p-1 text-center"}>
                <Trash2
                    className="h-4 w-4 mx-auto"
                    onClick={() => eliminar(o)}
                />
            </TableCell>
        </TableRow>
    )
}

export default TablaTarjetas;