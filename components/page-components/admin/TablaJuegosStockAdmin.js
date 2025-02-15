"use client"

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Check, Copy, Pen, Trash2} from "lucide-react";
import ModalCustomizado from "@/components/personalized-ui/Modal";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {toastError, toastSuccess} from "@/lib/Toast";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Input} from "@/components/ui/input";
import {CardDescription} from "@/components/ui/card";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {actualizarJuegoStock, eliminarJuegoStock} from "@/dominio/servicios/stock-juegos";

function TablaJuegosStockAdmin({juegos: j}) {
    const [juegos, setJuegos] = useState(j)
    const [modalEditarAbierto, setModalEditarAbierto] = useState(false)
    const [modalEliminarAbierto, setModalEliminarAbierto] = useState(false)
    const [juegoSeleccionado, setJuegoSeleccionado] = useState(null)
    const [juegosBusqueda, setJuegosBusqueda] = useState([])
    const [juegoBuscado, setJuegoBuscado] = useState("")

    const buscarJuego = (e) => {
        if (e.target.value.length === 0) {
            setJuegosBusqueda([])
            setJuegoBuscado("")
        }
        const juegosFiltrados = [...juegos].filter((j) => {
            return j.nombre.toLowerCase().includes(e.target.value.toLowerCase())
        });
        setJuegoBuscado(e.target.value)
        setJuegosBusqueda(juegosFiltrados)
    }

    const manejarModalEditar = (juego = null) => {
        if (modalEditarAbierto) {
            setModalEditarAbierto(false)
            setJuegoSeleccionado(null)
        } else {
            setModalEditarAbierto(true)
            setJuegoSeleccionado(juego)
        }
    };

    const manejarModalEliminar = (plus = null) => {
        if (modalEliminarAbierto) {
            setModalEliminarAbierto(false)
            setJuegoSeleccionado(null)
        } else {
            setModalEliminarAbierto(true)
            setJuegoSeleccionado(plus)
        }
    };


    const eliminarJuego = (juego) => manejarModalEliminar(juego)
    const editarJuego = (juego) => manejarModalEditar(juego)

    const eliminarLocal = (idJuego) => {
        return juegos.filter(s => s.id !== idJuego)
    }

    const actualizarLocal = (juegoActualizado) => {
        const juegosActualizados = [...juegos].map((j)=>{
            if (j.id === juegoActualizado.id) {
                return {
                    ...j,
                    ...juegoActualizado
                }
            }
            return j;
        })
        setJuegos(juegosActualizados)
    }

    const manejarEliminarJuego = async () => {
        if (!juegoSeleccionado.id) return toastError("No se pudo eliminar el PlayStation Plus")
        const {mensaje, exito} = await eliminarJuegoStock(juegoSeleccionado.id)
        setJuegos(eliminarLocal(juegoSeleccionado.id))
        manejarModalEliminar()
        if (exito) return toastSuccess(mensaje)
        toastError(mensaje)
    }

    const tablaProps = {
        eliminarJuego,
        editarJuego,
        juegos: juegosBusqueda.length > 0 ? juegosBusqueda : juegos
    }

    const modalEditarProps = {
        estaAbierto: modalEditarAbierto,
        manejarModalEditar,
        juegoSeleccionado,
        actualizarLocal
    }

    const modalEliminarProps = {
        estaAbierto: modalEliminarAbierto,
        manejarModalEliminar,
        juegoSeleccionado,
        manejarEliminarJuego
    }

    return (
        <>
            <ModalEliminar {...modalEliminarProps}/>
            <ModalEditar {...modalEditarProps}/>
            <Input
                onChange={buscarJuego}
                placeholder={"Buscar por nombre de juego"}
                className={"w-full my-3"}
            />
            {juegoBuscado && <p className={"py-3 text-sm text-gray-600"}>Se muestran resultados para: {juegoBuscado}</p>}
            <Tabla {...tablaProps}/>
        </>)
}

const InputWrapper = ({children}) => {
    return (
        <div className={"space-y-2"}>{children}</div>
    )
}

const ModalEliminar = ({estaAbierto, manejarEliminarJuego, manejarModalEliminar}) => {
    return (
        <ModalCustomizado estaAbierto={estaAbierto}>
            <ModalCustomizado.Titulo>¿Deseas eliminar este juego?</ModalCustomizado.Titulo>
            <CardDescription>Esta acción no se puede deshacer.</CardDescription>
            <div className={"flex justify-end gap-4 w-full"}>
                <Button
                    type={"button"}
                    variant={"destructive"}
                    onClick={() => manejarModalEliminar()}
                >
                    Cancelar
                </Button>
                <Button
                    type={"button"}
                    onClick={() => manejarEliminarJuego()}
                >
                    Eliminar
                </Button>
            </div>
        </ModalCustomizado>
    )
}

const ModalEditar = ({estaAbierto, manejarModalEditar, juegoSeleccionado = null, actualizarLocal}) => {
    const [datosFormulario, setDatosFormulario] = useState({...juegoSeleccionado});

    if (!juegoSeleccionado) return;

    const enviarFormulario = async (e) => {
        e.preventDefault()
        const {mensaje, exito} = await actualizarJuegoStock({...juegoSeleccionado, ...datosFormulario});
        manejarModalEditar()
        actualizarLocal({...juegoSeleccionado, ...datosFormulario})
        if (exito) return toastSuccess(mensaje);
        return toastError(mensaje);
    }

    const manejarCampos = (e) => {
        setDatosFormulario((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const manejarSelect = (campo, valor) => setDatosFormulario((prev) => ({...prev, [campo]: valor}))

    return (
        <ModalCustomizado estaAbierto={estaAbierto}>
            <ModalCustomizado.Titulo>Editando: {juegoSeleccionado.nombre}</ModalCustomizado.Titulo>
            <form className={"space-y-4"} onSubmit={enviarFormulario}>
                <div className={"space-y-2"}>
                    <Label htmlFor={"nombre"}>Nombre del juego</Label>
                    <Input
                        name={"nombre"}
                        type={"text"}
                        onChange={manejarCampos}
                        placeholder={"Nombre del juego"}
                        defaultValue={juegoSeleccionado.nombre}
                    />
                </div>
                <div className={"grid grid-cols-2 gap-4"}>
                    <div className={"space-y-2"}>
                        <Label htmlFor={"precioCliente"}>Precio Cliente</Label>
                        <Input
                            name={"precioCliente"}
                            type={"number"}
                            onChange={manejarCampos}
                            defaultValue={juegoSeleccionado.precioCliente}
                        />
                    </div>
                    <div className={"space-y-2"}>
                        <Label htmlFor={"precioReventa"}>Precio Reventa</Label>
                        <Input
                            name={"precioReventa"}
                            type={"number"}
                            onChange={manejarCampos}
                            defaultValue={juegoSeleccionado.precioReventa}
                        />
                    </div>
                </div>
                <div className={"grid grid-cols-2 items-start gap-4"}>
                    <div className={"space-y-2"}>
                        <Label htmlFor={"stock"}>Stock</Label>
                        <Input
                            name={"stock"}
                            type={"number"}
                            onChange={manejarCampos}
                            defaultValue={juegoSeleccionado.stock}
                        />
                    </div>
                    <InputWrapper>
                        <Label>Mostrar Idioma</Label>
                        <RadioGroup
                            className={"flex gap-4"}
                            defaultValue={juegoSeleccionado?.mostrarIdioma}
                            onValueChange={(value) => manejarSelect("mostrarIdioma", value)}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={true} id="si"/>
                                <Label htmlFor="si">Sí</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={false} id="no"/>
                                <Label htmlFor="no">No</Label>
                            </div>
                        </RadioGroup>
                    </InputWrapper>
                </div>
                <div>
                    <Label>Selecciona consola</Label>
                    <Select
                        defaultValue={juegoSeleccionado?.consola.join("/")}
                        onValueChange={(valor) => manejarSelect("consola", valor)}
                        name="consola">
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Elige una opción"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="PS3">PS3</SelectItem>
                            <SelectItem value="PS4">PS4</SelectItem>
                            <SelectItem value="PS5">PS5</SelectItem>
                            <SelectItem value="PS4/PS5">PS4/PS5</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label>Selecciona tipo de cuenta</Label>
                    <Select
                        defaultValue={juegoSeleccionado.tipo}
                        onValueChange={(valor) => manejarSelect("tipo", valor)}
                        name="tipo">
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Elige una opción"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Primaria">Primaria</SelectItem>
                            <SelectItem value="Secundaria">Secundaria</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label>Selecciona idioma del juego</Label>
                    <Select
                        defaultValue={juegoSeleccionado.idioma ?? "-"}
                        onValueChange={(valor) => manejarSelect("idioma", valor)}
                        name="idioma"
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Elige una opción"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Español Latino">Español Latino</SelectItem>
                            <SelectItem value="Español Gallego">Español Gallego</SelectItem>
                            <SelectItem value="Inglés con subtitulos en español">Inglés con subtitulos en
                                español</SelectItem>
                            <SelectItem value="Inglés">Inglés</SelectItem>
                            <SelectItem value={"-"}>Sin información</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className={"w-full justify-end flex gap-4"}>
                    <Button
                        variant="destructive"
                        type={"button"}
                        onClick={() => manejarModalEditar()}
                    >
                        Cancelar
                    </Button>
                    <Button
                        type={"submit"}
                    >
                        Enviar
                    </Button>
                </div>

            </form>
        </ModalCustomizado>
    )
}

const Tabla = (props) => {
    return (
        <Table>
            <TableCaption>Juegos en stock - Precios actualizados</TableCaption>
            <Cabecera/>
            <Cuerpo {...props}/>
        </Table>
    )
}

const Cabecera = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className={"w-3/12 px-2 md:px-4"}>Nombre</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Stock</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>P.C</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>P.R</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Consola</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Tipo</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>M.I</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Idioma</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Editar</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Eliminar</TableHead>
            </TableRow>
        </TableHeader>
    )
}

const Cuerpo = ({juegos, editarJuego, eliminarJuego}) => {
    return (
        <TableBody>
            {juegos.map(j => (
                <Registro
                    juego={j}
                    key={j.id}
                    editarJuego={editarJuego}
                    eliminarJuego={eliminarJuego}
                />))
            }
        </TableBody>
    )
}

const Registro = ({juego: j, editarJuego, eliminarJuego}) => {
    return (
        <TableRow>
            <TableCell className={"p-1 py-2"}>{j.nombre}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.stock}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>${j.precioCliente.toLocaleString("es-AR")}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>${j.precioReventa.toLocaleString("es-AR")}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.consola.join("/")}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.tipo}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.mostrarIdioma ? "Sí" : "No"}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.idioma ?? "-"}</TableCell>
            <TableCell className={"p-1 text-center"}>
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() => editarJuego(j)}
                >
                    <Pen
                        className="h-4 w-4 mx-auto"
                    />
                </Button>
            </TableCell>
            <TableCell className={"p-1 text-center"}>
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() => eliminarJuego(j)}
                >
                    <Trash2
                        className="h-4 w-4 mx-auto"
                    />
                </Button>
            </TableCell>
        </TableRow>
    )
}

export default TablaJuegosStockAdmin;