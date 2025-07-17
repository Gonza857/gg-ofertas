import FormularioAgregarPreventa from "@/app/(modules)/admin/(components)/preventas/FormularioAgregarPreventa";

export const dynamic = "force-dynamic";

function CrearPreventa() {
    return (
        <div className="flex flex-col mb-4">
            <h1 className="text-3xl font-bold tracking-tight">Agregar preventa</h1>
            <FormularioAgregarPreventa/>
        </div>
    )
}

export default CrearPreventa;