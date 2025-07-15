import {cookies} from "next/headers";
import {obtenerOfertaPorId} from "@/dominio/servicios/juegos";
import FormularioAgregarPreventa from "@/app/(modules)/admin/(components)/preventas/FormularioAgregarPreventa";
import {obtenerPreventaPorId} from "@/dominio/servicios/preventas";

async function EditarPreventa({params}) {
    const id = params.id;
    const cookie = cookies().get("access-token")?.value
    const resultado = await obtenerPreventaPorId(cookie, id);
    console.log("resultado back", resultado)

    return (
        <div className="flex flex-col mb-4">
            <h1 className="text-3xl font-bold tracking-tight">Editar preventa</h1>
            <FormularioAgregarPreventa item={resultado.data}/>
        </div>
    )
}

export default EditarPreventa;